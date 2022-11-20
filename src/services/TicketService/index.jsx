const baseUrl = process.env.REACT_APP_BASE_URL;

export const buyTicket = async body => {
  const response = await fetch(`${baseUrl}api/v1/tickets`,
 {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${window.sessionStorage.getItem('token')}`
      },
      body: JSON.stringify(body)
    }   
  );

  const data = await response.json();

  return data;
};

