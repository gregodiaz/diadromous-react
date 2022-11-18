import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import LoadingSpinner from '../LoadingSpinner';
import { getTravel } from '../../../services/TravelService';

export default function TravelDetail() {
    const params = useParams()

    const [isLoading, setIsLoading] = useState(false)
    const [travel, setTravel] = useState()

    const getTravelDetail = async () => {
        const travelDetail = await getTravel(params.id)

        setTravel(travelDetail);
        setIsLoading(true);
    };

    useEffect(() => {
        getTravelDetail()
    }, []);

    return (
        <div className='container-fluid w-auto m-5'>
            {
                !isLoading ?
                    <LoadingSpinner /> :
                    <div className="card bg-dark text-white">
                        <div className="card-header">
                            <div className="container d-flex justify-content-between p-4">
                                <div>From <i>{travel.cities[0].name}</i> to <i>{travel.cities[1].name}</i></div>
                                <div>#{travel.id}</div>
                            </div>
                        </div>
                        <div className="card-body">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item bg-dark text-white">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col col-sm-8">{travel.cities[0].type_name}</div>
                                            <div className="col">Price</div>
                                        </div>
                                        <div className="row">
                                            <div className="col col-sm-2">{travel.cities[0].name}</div>
                                            <div className="col col-sm-6">{travel.departure_date}</div>
                                            <div className="col">${travel.price}</div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item bg-dark text-white">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col col-sm-8">Arrival</div>
                                            <div className="col">Tickets [Remaining/Total]</div>
                                        </div>
                                        <div className="row">
                                            <div className="col col-sm-2">{travel.cities[1].name}</div>
                                            <div className="col col-sm-6">{travel.arrival_date}</div>
                                            <div className="col">
                                                {travel.available_passengers}/{travel.total_passengers}
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item bg-dark text-white">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col">Validation</div>
                                        </div>
                                        {
                                            Object.keys(travel.validation).map(date =>
                                                <div className="row" key={date}>
                                                    <div className="col col-sm-2">{date}</div>
                                                    <div className="col col-sm-2">{travel.validation[date]}%</div>
                                                </div>
                                            )
                                        }
                                    </div>
                                </li>
                                <li className="list-group-item bg-dark text-white">
                                    <div className="container d-flex justify-content-between">
                                        <button className="btn btn-secondary">Back</button>
                                        <button className="btn btn-outline-primary">Prev</button>
                                        <button className="btn btn-outline-primary">Next</button>
                                        <button className="btn btn-warning">Buy</button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
            }
        </div>
    );
};

