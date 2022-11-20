import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NavBar({ children }) {
  const navigate = useNavigate();

  const [token, setToken] = useState()

  const handleSignOut = () => {
    window.sessionStorage.removeItem('token')
    setToken(null)
  }

  useEffect(() => {
    setToken(window.sessionStorage.getItem('token'))
  }, [window.location.pathname])

  return (
    <div>
      <div className='container-fluid position-fixed fixed-top'>
        <div className='bg-dark shadow d-flex justify-content-between'>
          <div className='btn btn-outline-warning mx-2' onClick={() => navigate('/')}>
            Diadromous
          </div>
          <div>
            {
              !token ?
                <div>
                  <button className='btn btn-outline-info text-white mx-2' onClick={() => navigate('/login')}>
                    Sign In
                  </button>
                  <button className='btn btn-info text-white mx-2' onClick={() => navigate('/register')}>
                    Sign Up
                  </button>
                </div> :
                <div className='text-white'>
                  <button className='btn btn-info text-white' onClick={handleSignOut}>
                    Sign Out
                  </button>
                </div>
            }
          </div>
        </div>
      </div>
      <div className='mt-5'>
        {children}
      </div>
    </div>
  )
};

