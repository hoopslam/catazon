import React from 'react';
import CategoryContainer from './components/category/CategoryContainer';
import { categories } from './util/constants';

function App() {
    return <CategoryContainer categories={categories} />;
}

export default App;
