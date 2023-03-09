import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CategoryPreview from './CategoryPreview';
import ShopCategory from './ShopCategory';

function Shop() {
    return (
        <Routes>
            <Route
                index
                element={<CategoryPreview />}
            />
            <Route
                path=':category'
                element={<ShopCategory />}
            />
        </Routes>
    );
}

export default Shop;
