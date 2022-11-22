import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import loggedInStore from '../../../store/loggedInStore';

import SignButton from '../buttons/SignButton';
import MyTicketsButton from '../buttons/MyTicketsButton';

export default function NavBar({ children }) {
  const navigate = useNavigate();

  const { loggedIn } = loggedInStore()

  const [name, setName] = useState()

  useEffect(() => {
    setName(window.sessionStorage.getItem('name'))
  }, [loggedIn])

  return (
    <div>
      <div className='container-fluid fixed-top mb-5'>
        <div className='bg-dark shadow d-flex justify-content-between'>
          <div className='btn btn-outline-warning mx-2' onClick={() => navigate('/')}>
            Diadromous
          </div>
          <div>
            {
              loggedIn ?
                <div className='text-white text-capitalize'>
                  hi {name}!
                  <MyTicketsButton />
                  <SignButton type={'Out'} />
                </div> :
                <div>
                  <SignButton type={'In'} />
                  <SignButton type={'Up'} />
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

