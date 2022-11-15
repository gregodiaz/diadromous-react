import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Travels from './components/Travels';
import Tickets from './components/Tickets';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Travels />} />
                <Route exact path='tickets' element={<Tickets />} />
            </Routes>
        </Router>
    );
};
