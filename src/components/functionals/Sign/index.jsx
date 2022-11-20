import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { signRequest } from '../../../services/SingService';
import NavBar from '../NavBar';

export default function Sign() {
  const navigate = useNavigate()

  const [uri, setUri] = useState()
  const [body, setBody] = useState({ name: '', email: '', password: '', })

  const oppositeUri = uri === 'login' ? 'register' : 'login';

  const fullInput = type =>
    <input
      type={type === 'password' ? type : 'text'}
      name={type}
      className='form-control mb-2'
      placeholder={type}
      onChange={handleChange}
      required
    />

  const handleChange = ({ target }) => setBody({ ...body, [target.name]: target.value })

  const handleSubmit = async event => {
    event.preventDefault()

    const data = await signRequest(body, uri)

    window.sessionStorage.setItem("token", data.token);
    setBody({ name: '', email: '', password: '' })
    navigate('/')
  }

  useEffect(() => {
    setUri(window.location.pathname.split('/').pop())
  }, [window.location.pathname])

  return (
    <NavBar>
      <div className='container-fluid w-auto m-5'>
        <div className="card bg-secondary text-white">
          <form className='card-body p-2' onSubmit={handleSubmit}>

            {fullInput('name')}
            {fullInput('email')}
            {fullInput('password')}

            <div className='d-flex justify-content-between'>
              <button className='btn btn-primary text-capitalize px-4'>{uri}!</button>
              <div>
                {`${uri === 'register' ? 'Already' : 'Dont'} have an account?`}
                <a
                  className='btn btn-outline-primary text-capitalize font-italic ml-3'
                  onClick={() => navigate(`/${oppositeUri}`)}
                >
                  go {oppositeUri}!
                </a>
              </div>
            </div>

          </form>
        </div>
      </div>
    </NavBar>
  )
};

