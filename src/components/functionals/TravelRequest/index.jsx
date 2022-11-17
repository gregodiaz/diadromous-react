import React, { useEffect, useState } from 'react';

export default function TravelRequest() {

    const [cities, setCities] = useState()
    const [travels, setTravels] = useState([])

    const getTravels = async () => {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}api/v1/travels`);
        const data = await response.json();

        const travelCities = []
        data.map(travel => travelCities.push(travel.cities))

        setCities(travelCities);
        setTravels(data);
    };

    const handleShow = event => { event.preventDefault() };
    const handleBuy = event => { event.preventDefault() };

    useEffect(() => {
        getTravels()
    }, []);

    return (
        <tbody>
            {
                travels.map(travel =>
                    <tr key={travel.id}>
                        <td>{travel.id}</td>
                        <td>{travel.price}</td>
                        <td>{cities[travel.id - 1][0].name}</td>
                        <td>{travel.departure_date}</td>
                        <td>{cities[travel.id - 1][1].name}</td>
                        <td>{travel.arrival_date}</td>
                        <td>{travel.total_passengers}</td>
                        <td>{travel.available_passengers}</td>
                        <td><button className='btn btn-info' onClick={handleShow}>Show</button></td>
                        <td><button className='btn btn-warning' onClick={handleBuy}>Buy</button></td>
                    </tr>
                )
            }
        </tbody>
    );
};

