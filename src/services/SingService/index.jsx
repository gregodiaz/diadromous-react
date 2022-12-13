const baseUrl = process.env.REACT_APP_BASE_URL;

export const signRequest = async (body, signType) => {
  try {
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
    const status = response.status;
    const data = await response.json();

    if (status >= 400) return { data, error: true };

    window.sessionStorage.setItem('token', data.token)

    const user = await getUser()
    return user;
  } catch (error) {
    return { error };
  }
};

export const getUser = async () => {
  try {
    const response = await fetch(`${baseUrl}api/user`,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${window.sessionStorage.getItem('token')}`
        },
      }
    );
    const status = response.status;
    if (status >= 400) return response;

    const user = await response.json();
    window.sessionStorage.setItem('name', user.name)

    return user;
  } catch (error) {
    return error;
  }
};

