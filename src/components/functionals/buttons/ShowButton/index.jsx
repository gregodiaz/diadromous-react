import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ShowButton({ travelId }) {
  const navigate = useNavigate()

  return (
    <button className="btn btn-outline-info" onClick={() => navigate(`/${travelId}`)}>
      Show
    </button>
  );
};

