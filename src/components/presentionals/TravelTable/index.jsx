import React from 'react';

import Travels from '../../functionals/Travels';

export default function TravelTable() {

  return (
    <div className='container'>
      <table className='table table-striped table-dark table-hover'>
        <thead>
          <tr>
            <th>#</th>
            <th>Price</th>
            <th>Departure City</th>
            <th>Arrival city</th>
            <th>Departure date</th>
            <th>Arrival date</th>
            <th>Total Passengers</th>
            <th>Remaining Tickets</th>
            <th>Show Forecast</th>
            <th>Buy Ticket</th>
          </tr>
        </thead>
        <Travels />
      </table>
    </div>
  );
};

