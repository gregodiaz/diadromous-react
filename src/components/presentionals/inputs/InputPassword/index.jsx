import React, { useState } from 'react';

export default function InputPassword({ handleChange }) {
  const [passType, setPassType] = useState('password')

  return (
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
  )
};

