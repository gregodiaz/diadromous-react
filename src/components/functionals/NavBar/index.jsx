import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NavBar({ children }) {
  const navigate = useNavigate();

  const [name, setName] = useState(window.sessionStorage.getItem('name'))

  const handleSignOut = () => {
    window.sessionStorage.clear()
    setName(null)
  }

  return (
    <div>
      <div className='container-fluid position-fixed fixed-top'>
        <div className='bg-dark shadow d-flex justify-content-between'>
          <div className='btn btn-outline-warning mx-2' onClick={() => navigate('/')}>
            Diadromous
          </div>
          <div>
            {
              name ?
                <div className='text-white text-capitalize'>
                  hi {name}!
                  <button className='btn btn-info text-white ml-3' onClick={handleSignOut}>
                    Sign Out
                  </button>
                </div> :
                <div>
                  <button className='btn btn-outline-info text-white mx-2' onClick={() => navigate('/login')}>
                    Sign In
                  </button>
                  <button className='btn btn-info text-white mx-2' onClick={() => navigate('/register')}>
                    Sign Up
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

