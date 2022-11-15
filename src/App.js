import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Travels from './components/presentionals/Travels';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Travels />} />
            </Routes>
        </Router>
    );
};
