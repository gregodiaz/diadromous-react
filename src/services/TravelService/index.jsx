const baseUrl = process.env.REACT_APP_BASE_URL;

export const getTravels = async (travelId = '') => {
  try {
    const response = await fetch(`${baseUrl}api/v1/travels/${travelId}`);

    const status = response.status;
    if (status >= 400) return response;

    const data = await response.json();

    return data;
  } catch (error) {
    return { error };
  }
};

