import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Sign from './components/functionals/Sign';
import TravelDetail from './components/functionals/TravelDetail';
import TravelTable from './components/presentionals/TravelTable';

export default function App() {
  const token = window.sessionStorage.getItem('token')

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<TravelTable />} />
        <Route exact path='/:id' element={<TravelDetail />} />

        <Route exact path='/login' element={token ? <Navigate to='/' /> : <Sign />} />
        <Route exact path='/register' element={token ? <Navigate to='/' /> : <Sign />} />
      </Routes>
    </Router>
  );
};

