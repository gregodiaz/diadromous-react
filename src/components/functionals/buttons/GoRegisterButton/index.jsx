import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function GoRegisterButton() {
  const navigate = useNavigate()

  const [uri, setUri] = useState()

  const oppositeUri = uri === 'login' ? 'register' : 'login';

  const handleClick = event => {
    event.preventDefault()
    navigate(`/${oppositeUri}`)
  }

  useEffect(() => {
    setUri(window.location.pathname.split('/').pop())
  }, [window.location.pathname])

  return (
    <div>
      {`${uri === 'register' ? 'Already' : 'Dont'} have an account?`}
      <button
        className='btn btn-outline-primary text-white text-capitalize font-italic ml-3'
        onClick={handleClick}
      >
        go {oppositeUri}!
      </button>
    </div>
  );
};


