import React, { useEffect, useState } from 'react';

import { getTickets } from '../../../services/TicketService';

import CancelButton from '../buttons/CancelButton';
import LoadingSpinner from '../../presentionals/LoadingSpinner';

export default function Tickets() {
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [tickets, setTickets] = useState([])

  const getAllTickets = async () => {
    const response = await getTickets()

    if (response.error) return setError(response.error.message);
    if (response.status >= 400) return setError(response.statusText);

    setTickets(response);
    setIsLoading(true);
  };

  useEffect(() => {
    getAllTickets()
  }, []);

  return (
    <tbody>
      {
        !isLoading ?
          error ?
            <div className='container border rounded border-danger text-danger h-1 my-2 p-3'>
              {error}
            </div> :
            <LoadingSpinner />
          :
          tickets.map(ticket =>
            <tr key={ticket.id}>
              <td className='text-center'>{ticket.id}</td>
              <td className='text-center'>{ticket.seat_number}</td>
              <td className='text-center'>{ticket.travel.id}</td>
              <td>${ticket.travel.price}</td>
              {
                ticket.travel.cities.map(city => <td key={city.id}>{city.name}</td>)
              }
              <td>{ticket.travel.departure_date}</td>
              <td>{ticket.travel.arrival_date}</td>
              <td>
                <CancelButton
                  travelId={ticket.id}
                  refreshComponent={getAllTickets}
                />
              </td>
            </tr>
          )
      }
    </tbody>
  );
};

