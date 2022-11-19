const baseUrl = process.env.REACT_APP_BASE_URL;

export const signRequest = async (body, signType) => {
  const url = `${baseUrl}api/${signType}`

  const response = await fetch(url,
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    }
  );

  const data = await response.json();

  return data;
};

