import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import DefaultTemplate from '../../presentionals/DefaultTemplate';
import GoRegisterButton from '../buttons/GoRegisterButton';
import Input from '../../presentionals/inputs/Input';
import InputPassword from '../../presentionals/inputs/InputPassword';

import loggedInStore from '../../../store/loggedInStore';
import { getUser, signRequest } from '../../../services/SingService';

export default function Sign() {
  const navigate = useNavigate()

  const { setLoggedIn } = loggedInStore()

  const [error, setError] = useState()
  const [body, setBody] = useState({ name: '', email: '', password: '', })
  const [uri, setUri] = useState()

  const handleChange = ({ target }) => setBody({ ...body, [target.name]: target.value })

  const handleSubmit = async event => {
    event.preventDefault()

    const response = await signRequest(body, uri)

    if (response.error) return setError(response.error.message);
    if (response.status >= 400) return setError(response.statusText);

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
            {
              error ?
                <div className='container border rounded border-danger bg-dark text-danger h-1 my-2 p-3'>
                  {error}
                </div> :
                ''
            }

            <Input type='name' handleChange={handleChange} />
            <Input type='email' handleChange={handleChange} />
            <InputPassword handleChange={handleChange} />

            <div className='d-flex justify-content-between'>
              <button className='btn btn-primary text-capitalize px-4'>{uri}!</button>
              <GoRegisterButton />
            </div>

          </form>
        </div>
      </div>
    </DefaultTemplate>
  )
};

