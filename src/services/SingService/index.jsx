const baseUrl = process.env.REACT_APP_BASE_URL;

export const signRequest = async (body, signType) => {
  await fetch(`${baseUrl}sanctum/csrf-cookie`)

  const response = await fetch(`${baseUrl}api/${signType}`,
    {
      method: 'POST',
      credentials: 'include',
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

