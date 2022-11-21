import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MyTicketsButton() {
  const navigate = useNavigate()

  const [uri, setUri] = useState()

  const oppositeUri = uri === 'tickets' ? '' : 'tickets';
  const text = uri === 'tickets' ? 'Go Travels' : 'My Tickets'

  useEffect(() => {
    setUri(window.location.pathname.split('/').pop())
  }, [window.location.pathname])

  return (
    <button
      className='btn btn-outline-info text-white text-capitalize mx-2 ml-3'
      onClick={() => navigate(`/${oppositeUri}`)}
    >
      {text}
    </button>
  );
};

