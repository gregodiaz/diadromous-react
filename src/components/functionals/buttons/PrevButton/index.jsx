import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function PrevButton() {
  const params = useParams()
  const navigate = useNavigate()

  const [isMin, setIsMin] = useState()

  useEffect(() => {
    setIsMin(+params.id <= 1)
  }, [params.id])


  return (
    <button
      className={`btn btn-outline-${isMin ? 'secondary' : 'primary'}`}
      onClick={() => navigate(`/${+params.id - 1}`)}
      disabled={isMin}
    >
      Prev
    </button>
  );
}

