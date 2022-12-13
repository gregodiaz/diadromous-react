import React from 'react';

import DefaultTemplate from '../../presentionals/DefaultTemplate';
import Tickets from '../../functionals/Tickets';

export default function TravelTable() {

  return (
    <DefaultTemplate>
      <div className='container-fluid'>
        <table className='table table-striped table-dark table-hover'>
          <thead className='bg-dark sticky-top shadow-sm'>
            <tr>
              <th className='text-center' >#</th>
              <th className='text-center' >Travel Id</th>
              <th>Price</th>
              <th>Departure City</th>
              <th>Departure date</th>
              <th>Arrival city</th>
              <th>Arrival date</th>
              <th>Cancel Ticket</th>
            </tr>
          </thead>
          <Tickets />
        </table>
      </div>
    </DefaultTemplate>
  );
};

