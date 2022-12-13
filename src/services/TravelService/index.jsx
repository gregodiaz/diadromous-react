const baseUrl = process.env.REACT_APP_BASE_URL;

export const getTravels = async (travelId = '') => {
  try {
    const response = await fetch(`${baseUrl}api/v1/travels/${travelId}`);

    const status = response.status;
    const data = await response.json();

    if (status >= 400) return { data, error: true };

    return data;
  } catch (error) {
    return { error };
  }
};

