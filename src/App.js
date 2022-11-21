import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Sign from './components/functionals/Sign';
import TravelDetail from './components/functionals/TravelDetail';
import TravelTable from './components/presentionals/TravelTable';
import TicketTable from './components/presentionals/TicketTable';

import loggedInStore from './store/loggedInStore';

export default function App() {
  const { loggedIn } = loggedInStore()

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<TravelTable />} />
        <Route exact path='/:id' element={<TravelDetail />} />

        <Route exact path='/login' element={<Sign />} />
        <Route exact path='/register' element={<Sign />} />

        <Route exact path='/tickets' element={loggedIn ? <TicketTable /> : <Navigate to='/' />} />
      </Routes>
    </Router>
  );
};

