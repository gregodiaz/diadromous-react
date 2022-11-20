import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { buyTicket } from '../../../services/TicketService'

// Back
export const Back = () => {
  const navigate = useNavigate()

  return (
    <button className="btn btn-secondary" onClick={() => navigate('/')}>
      Back
    </button>
  );
};

// Prev
export const Prev = () => {
  const params = useParams()
  const navigate = useNavigate()

  const min = params.id <= 1;
  const handlePrev = () => {
    if (!min) return navigate(`/${+params.id - 1}`);
  };

  return (
    <button className="btn btn-outline-primary" onClick={handlePrev} disabled={min}>
      Prev
    </button>
  );
}

// Next
export const Next = () => {
  const params = useParams()
  const navigate = useNavigate()

  const max = params.id >= 20;
  const handleNext = () => {
    if (!max) return navigate(`/${+params.id + 1}`);
  };

  return (
    <button className="btn btn-outline-primary" onClick={handleNext} disabled={max}>
      Next
    </button>
  );
};

// Buy
export const Buy = ({ value, refreshComponent }) => {
  const navigate = useNavigate()

  const confirmGoLogin = () => {
    if (window.confirm('You must be logged in to be able to buy a ticket. Do you want to go log in?')) navigate('/login');
  }

  const confirmBuy = async () => {
    if (window.confirm('Confirm the purchase?')) {
      await buyTicket({ travel_id: value })
      refreshComponent()
    }
  }

  const handleBuy = async () => {
    window.sessionStorage.getItem('token') ?
      await confirmBuy() :
      confirmGoLogin();
  };

  return (
    <button className="btn btn-warning" onClick={handleBuy}>
      Buy
    </button>
  );
};

