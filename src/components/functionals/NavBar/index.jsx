import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../../../services/SingService';

export default function NavBar({ children }) {
  const navigate = useNavigate();

  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)

  const fetchUser = async () => {
    const user = await getUser()
    setUser(user)
  }

  const handleSignOut = () => {
    window.sessionStorage.removeItem('token')
    setToken(null)
  }

  useEffect(() => {
    setToken(window.sessionStorage.getItem('token'))
    if (token) fetchUser();
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
                <div className='text-white text-capitalize'>
                  {user ? `hi ${user.name}!` : ''}
                  <button className='btn btn-info text-white ml-3' onClick={handleSignOut}>
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

