import React, { useEffect, useState } from 'react';

import { getTravels } from '../../../services/TravelService';

export default function Travels() {
    const [travels, setTravels] = useState([])

    const getAllTravels = async () => {
        const allTravels = await getTravels()
        setTravels(allTravels);
    };

    const handleShow = event => { event.preventDefault() };
    const handleBuy = event => { event.preventDefault() };

    useEffect(() => {
        getAllTravels()
    }, []);

    return (
        <tbody>
            {
                travels.map(travel =>
                    <tr key={travel.id}>
                        <td>{travel.id}</td>
                        <td>${travel.price}</td>
                        {
                            travel.cities.map(city => <td>{city.name}</td>)
                        }
                        <td>{travel.departure_date}</td>
                        <td>{travel.arrival_date}</td>
                        <td>{travel.total_passengers}</td>
                        <td>{travel.available_passengers}</td>
                        <td><button className='btn btn-outline-info' onClick={handleShow}>Show</button></td>
                        <td><button className='btn btn-outline-warning' onClick={handleBuy}>Buy</button></td>
                    </tr>
                )
            }
        </tbody>
    );
};


