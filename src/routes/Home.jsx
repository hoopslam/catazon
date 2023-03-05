import React from 'react';
import CategoryContainer from '../components/category/CategoryContainer';
import { categories } from '../util/constants';

function Home() {
    return (
        <div>
            <CategoryContainer categories={categories} />
        </div>
    );
}

export default Home;
