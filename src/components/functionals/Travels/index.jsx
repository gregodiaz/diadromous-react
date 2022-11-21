import React, { useEffect, useState } from 'react';

import { getTravels } from '../../../services/TravelService';

import BuyButton from '../buttons/BuyButton';
import LoadingSpinner from '../../presentionals/LoadingSpinner';
import ShowButton from '../buttons/ShowButton';

export default function Travels() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [travels, setTravels] = useState([])

  const getAllTravels = async () => {
    const allTravels = await getTravels()

    setTravels(allTravels);
    setIsLoaded(true);
  };

  useEffect(() => {
    getAllTravels()
  }, []);

  useEffect(() => {
    if (isLoaded) {
      window.sessionStorage.setItem('lastTravelId', travels.length);
    }
  }, [isLoaded])

  return (
    <tbody>
      {
        !isLoaded ?
          <LoadingSpinner /> :
          travels.map(travel =>
            <tr key={travel.id} className={travel.available_passengers === 0 ? 'text-muted' : ''} >
              <td>{travel.id}</td>
              <td>${travel.price}</td>
              {
                travel.cities.map(city => <td>{city.name}</td>)
              }
              <td>{travel.departure_date}</td>
              <td>{travel.arrival_date}</td>
              <td>{travel.total_passengers}</td>
              <td>{travel.available_passengers}</td>
              <td>
                <ShowButton travelId={travel.id} />
              </td>
              <td>
                <BuyButton
                  travelId={travel.id}
                  availablePassengers={travel.available_passengers}
                  refreshComponent={getAllTravels}
                />
              </td>
            </tr>
          )
      }
    </tbody>
  );
};

