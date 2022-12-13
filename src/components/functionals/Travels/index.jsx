import React, { useEffect, useState } from 'react';

import { getTravels } from '../../../services/TravelService';

import LoadingSpinner from '../../presentionals/LoadingSpinner';
import ShowButton from '../buttons/ShowButton';

export default function Travels() {
  const [error, setError] = useState()
  const [isLoaded, setIsLoaded] = useState(false)
  const [travels, setTravels] = useState([])

  const getAllTravels = async () => {
    const response = await getTravels()

    if (response.error) return setError(response.data.message);

    setTravels(response);
    setIsLoaded(true);
  };

  useEffect(() => {
    getAllTravels()
  }, []);

  useEffect(() => {
    if (isLoaded) window.sessionStorage.setItem('lastTravelId', travels.length);
  }, [isLoaded])

  return (
    <tbody>
      {
        !isLoaded ?
          error ?
            <div className='container border rounded border-danger text-danger h-1 my-2 p-3'>
              {error}
            </div> :
            <LoadingSpinner /> :
          travels.map(travel =>
            <tr key={travel.id} className={travel.available_passengers === 0 ? 'text-muted' : ''} >
              <td>{travel.id}</td>
              <td>${travel.price}</td>
              {
                travel.cities.map(city =>
                  <>
                    <td>{city.name}</td>
                    <td>{city.port_call}</td>
                  </>
                )
              }
              <td>{travel.available_passengers} / {travel.total_passengers}</td>
              <td>
                <ShowButton travelId={travel.id} />
              </td>
            </tr>
          )
      }
    </tbody >
  );
};

