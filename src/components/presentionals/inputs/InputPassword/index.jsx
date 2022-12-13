import React, { useState } from 'react';

export default function InputPassword({ handleChange }) {
  const [passType, setPassType] = useState('password')

  return (
    <div className="input-group mb-4">
      <input
        type={passType}
        name='password'
        className="form-control input-group-prepend"
        placeholder="password"
        onChange={handleChange}
        required
      />
      <div className="btn input-group-text"
        onClick={event => {
          event.preventDefault()
          setPassType(passType === 'password' ? 'text' : 'password')
        }}
      >
        {passType === 'password' ? 'show' : 'hide'}
      </div>
    </div>
  )
};

