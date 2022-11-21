import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function NextButton() {
  const params = useParams()
  const navigate = useNavigate()

  const [isMax, setIsMax] = useState()

  const lastTravelId = window.sessionStorage.getItem('lastTravelId')

  useEffect(() => {
    setIsMax(+params.id >= +lastTravelId)
  }, [params.id])

  return (
    <button
      className={`btn btn-outline-${isMax ? 'secondary' : 'primary'}`}
      onClick={() => navigate(`/${+params.id + 1}`)}
      disabled={isMax}
    >
      Next
    </button>
  );
};

