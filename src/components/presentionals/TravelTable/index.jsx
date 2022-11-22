import React from 'react';

import DefaultTemplate from '../../presentionals/DefaultTemplate';
import Travels from '../../functionals/Travels';

export default function TravelTable() {

  return (
    <DefaultTemplate>
      <div className='container-fluid'>
        <table className='table table-striped table-dark table-hover'>
          <thead className='bg-dark sticky-top shadow-sm'>
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
    </DefaultTemplate>
  );
};

