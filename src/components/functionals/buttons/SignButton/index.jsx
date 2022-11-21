import React from 'react';
import { useNavigate } from 'react-router-dom';

import loggedInStore from '../../../../store/loggedInStore';

export default function SignButton({ type }) {
  const navigate = useNavigate()

  const { setLoggedIn } = loggedInStore()

  const outline = type === 'In' ? '-outline' : ''

  const handleClick = {
    In: () => { navigate('/login') },
    Up: () => { navigate('/register') },
    Out: () => {
      window.sessionStorage.removeItem('token')
      window.sessionStorage.removeItem('name')
      setLoggedIn(false)
    }
  }

  return (
    <button
      className={`btn btn${outline}-info text-white mx-2`}
      onClick={handleClick[type]}
    >
      Sing {type}
    </button>
  );
};

