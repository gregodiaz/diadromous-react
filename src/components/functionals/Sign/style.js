export const inputForm = (type = 'text', name) =>
return (
  <input type={type} name={name} className='form-control mb-2' placeholder={name} onChange={handleChange} required>
    )

