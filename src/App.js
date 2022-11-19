import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sign from './components/functionals/Sign';
import TravelDetail from './components/functionals/TravelDetail';
import TravelTable from './components/presentionals/TravelTable';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<TravelTable />} />
        <Route exact path='/:id' element={<TravelDetail />} />

        <Route exact path='/login' element={<Sign />} />
        <Route exact path='/register' element={<Sign />} />
      </Routes>
    </Router>
  );
};

