import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function BackButton() {
  const navigate = useNavigate()

  return (
    <button className="btn btn-secondary" onClick={() => navigate('/')}>
      Back
    </button>
  );
};

