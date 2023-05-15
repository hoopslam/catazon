import React from 'react';
import CategoryItem from './CategoryItem';
import './CategoryContainer.styles.scss';

function CategoryContainer({ categories }) {
    return (
        <div className='categories-container'>
            <h2>Popular Categories</h2>
            <div className='items-container'>
                {categories.map(({ title, id, url }) => (
                    <CategoryItem
                        key={id}
                        title={title}
                        url={url}
                    />
                ))}
            </div>
        </div>
    );
}

export default CategoryContainer;
