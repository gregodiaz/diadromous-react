import React from 'react';

import NavBar from '../../functionals/NavBar';

export default function TicketTable() {

  return (
    <NavBar>
      <div className='container'>
        <table className='table table-striped table-dark table-hover'>
          <thead>
            <tr>
              <th>#</th>
              <th>Seat Number</th>
              <th>Price</th>
              <th>Departure City</th>
              <th>Arrival city</th>
              <th>Departure date</th>
              <th>Arrival date</th>
              <th>Cancel Ticket</th>
            </tr>
          </thead>
        </table>
      </div>
    </NavBar>
  );
};


