import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import DefaultTemplate from '../../presentionals/DefaultTemplate';

import loggedInStore from '../../../store/loggedInStore';
import { signRequest } from '../../../services/SingService';

export default function Sign() {
  const navigate = useNavigate()

  const { setLoggedIn } = loggedInStore()

  const [body, setBody] = useState({ name: '', email: '', password: '', })
  const [passType, setPassType] = useState('password')
  const [uri, setUri] = useState()

  const oppositeUri = uri === 'login' ? 'register' : 'login';

  const fullInput = type =>
    <input
      type={type}
      name={type}
      className='form-control mb-2'
      placeholder={type}
      onChange={handleChange}
      required
    />

  const handleChange = ({ target }) => setBody({ ...body, [target.name]: target.value })

  const handleSubmit = async event => {
    event.preventDefault()

    await signRequest(body, uri)
    setLoggedIn(true)
    setBody({ name: '', email: '', password: '' })
    navigate('/')
  }

  useEffect(() => {
    setUri(window.location.pathname.split('/').pop())
  }, [window.location.pathname])

  return (
    <DefaultTemplate>
      <div className='container-fluid w-auto m-5 p-5 d-flex justify-content-center align-items-center'>
        <div className="card bg-secondary text-white w-50 my-5">
          <form className='card-body p-2' onSubmit={handleSubmit}>

            {fullInput('name')}
            {fullInput('email')}

            <div className="input-group mb-4">
              <input
                type={passType}
                name='password'
                className="form-control"
                placeholder="password"
                onChange={handleChange}
                required
              />
              <div className="input-group-prepend">
                <button
                  className="input-group-text"
                  onClick={event => {
                    event.preventDefault()
                    setPassType(passType === 'password' ? 'text' : 'password')
                  }}
                >
                  {passType === 'password' ? 'show' : 'hide'}
                </button>
              </div>
            </div>

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
    </DefaultTemplate>
  )
};

