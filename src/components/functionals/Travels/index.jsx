import React, { useEffect, useState } from 'react';

import LoadingSpinner from '../../presentionals/LoadingSpinner';
import { getTravels } from '../../../services/TravelService';

export default function Travels() {
  const [isLoading, setIsLoading] = useState(false)
  const [travels, setTravels] = useState([])

  const getAllTravels = async () => {
    const allTravels = await getTravels()

    setTravels(allTravels);
    setIsLoading(true);
  };

  const handleShow = event => { event.preventDefault() };
  const handleBuy = event => { event.preventDefault() };

  useEffect(() => {
    getAllTravels()
  }, []);

  return (
    !isLoading ?
      <LoadingSpinner /> :
      <tbody>
        {
          travels.map(travel =>
            <tr key={travel.id}>
              <td>{travel.id}</td>
              <td>${travel.price}</td>
              {
                travel.cities.map(city => <td>{city.name}</td>)
              }
              <td>{travel.departure_date}</td>
              <td>{travel.arrival_date}</td>
              <td>{travel.total_passengers}</td>
              <td>{travel.available_passengers}</td>
              <td><button className='btn btn-outline-info' onClick={handleShow}>Show</button></td>
              <td><button className='btn btn-outline-warning' onClick={handleBuy}>Buy</button></td>
            </tr>
          )
        }
      </tbody>
  );
};

