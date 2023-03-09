import React from 'react';
import Home from './routes/Home';
import Navigation from './routes/Navigation';
import { Routes, Route } from 'react-router-dom';
import Authentication from './routes/Authentication';
import Shop from './routes/shop/Shop';
import Checkout from './routes/Checkout';

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
                <Route
                    path='shop/*'
                    element={<Shop />}
                />
                <Route
                    path='authentication'
                    element={<Authentication />}
                />
                <Route
                    path='checkout'
                    element={<Checkout />}
                />
            </Route>
        </Routes>
    );
}
export default App;
