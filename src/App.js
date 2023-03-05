import React from 'react';
import Home from './routes/Home';
import Navigation from './routes/Navigation';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Routes>
            <Route
                path='/'
                element={<Navigation />}
            >
                <Route
                    index
                    element={<Home />}
                />
            </Route>
        </Routes>
    );
}
export default App;
