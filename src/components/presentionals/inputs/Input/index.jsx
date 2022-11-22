import React from 'react';

export default function Input({ type, handleChange }) {
  return (
    <input
      type={type}
      name={type}
      className='form-control mb-2'
      placeholder={type}
      onChange={handleChange}
      required
    />
  )
};

