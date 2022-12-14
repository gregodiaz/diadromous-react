const baseUrl = process.env.REACT_APP_BASE_URL;

export const getTickets = async () => {
  try {
    const response = await fetch(`${baseUrl}api/v1/tickets`,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${window.sessionStorage.getItem('token')}`
        },
      }
    );
    const status = response.status;
    const data = await response.json();

    if (status >= 400) return { data, error: true };

    return data;
  } catch (error) {
    return { error };
  }
};

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


export const cancelTicket = async ticketId => {
  const response = await fetch(`${baseUrl}api/v1/tickets/${ticketId}`,
    {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${window.sessionStorage.getItem('token')}`
      },
    }
  );

  const data = await response.json();

  return data;
};

