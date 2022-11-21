import React from 'react';

import Tickets from '../../functionals/Tickets';
import NavBar from '../../functionals/NavBar';

export default function TravelTable() {

  return (
    <NavBar>
      <div className='container'>
        <table className='table table-striped table-dark table-hover'>
          <thead>
            <tr>
              <th className='text-center' >#</th>
              <th className='text-center' >Seat Number</th>
              <th className='text-center' >Travel Id</th>
              <th>Price</th>
              <th>Departure City</th>
              <th>Arrival city</th>
              <th>Departure date</th>
              <th>Arrival date</th>
              <th>Cancel Ticket</th>
            </tr>
          </thead>
          <Tickets />
        </table>
      </div>
    </NavBar>
  );
};

