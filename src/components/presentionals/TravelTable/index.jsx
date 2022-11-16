import React from 'react';

import TravelRequest from '../../functionals/TravelRequest';

export default function Travels() {

    return (
        <div className='container'>
            <table className='table table-dark'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Price</th>
                        <th>Departure City</th>
                        <th>Departure date</th>
                        <th>Arrival city</th>
                        <th>Arrival date</th>
                        <th>Total Passengers</th>
                        <th>Remaining Tickets</th>
                        <th>Show Forecast</th>
                        <th>Buy Ticket</th>
                    </tr>
                </thead>
                <TravelRequest />
            </table>
        </div>
    );
};


