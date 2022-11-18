const baseUrl = process.env.REACT_APP_BASE_URL;

export const getTravels = async () => {
    const response = await fetch(`${baseUrl}api/v1/travels`);
    const data = await response.json();

    return data;
};

export const getTravel = async travelId => {
    const response = await fetch(`${baseUrl}api/v1/travels/${travelId}`);
    const data = await response.json();

    return data;
};
