import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import TravelTable from './components/presentionals/TravelTable';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<TravelTable />} />
            </Routes>
        </Router>
    );
};
