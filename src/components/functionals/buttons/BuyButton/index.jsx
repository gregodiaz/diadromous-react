import React from 'react';
import { useNavigate } from 'react-router-dom';

import { buyTicket } from '../../../../services/TicketService';

export default function BuyButton({ travelId, availablePassengers, refreshComponent, cancelled }) {
  const navigate = useNavigate()
  const zeroTickets = availablePassengers === 0
  const disable = zeroTickets || cancelled

  const confirmGoLogin = () => {
    if (window.confirm('You must be logged in to be able to buy a ticket. Do you want to go log in?')) navigate('/login');
  }

  const confirmBuy = async () => {
    if (window.confirm('Confirm the purchase?')) {
      await buyTicket({ travel_id: travelId })
      refreshComponent()
    }
  }

  const handleBuy = async () => {
    window.sessionStorage.getItem('token') ?
      await confirmBuy() :
      confirmGoLogin();
  };

  return (
    <button
      className={`btn btn-${disable? 'outline-secondary' : 'warning'}`}
      disabled={disable}
      onClick={handleBuy}
    >
      Buy
    </button>
  );
}
