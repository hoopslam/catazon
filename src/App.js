import React from 'react';
import Home from './routes/Home';
import Navigation from './routes/Navigation';
import { Routes, Route } from 'react-router-dom';
import SignIn from './routes/SignIn';
import Shop from './routes/Shop';

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
                    path='shop'
                    element={<Shop />}
                />
                <Route
                    path='signin'
                    element={<SignIn />}
                />
            </Route>
        </Routes>
    );
}
export default App;
