import React from 'react';
import CategoryItem from './CategoryItem';
import './CategoryContainer.styles.scss';

function CategoryContainer({ categories }) {
    return (
        <div className='categories-container'>
            {categories.map(({ title, id, url }) => (
                <CategoryItem
                    key={id}
                    title={title}
                    url={url}
                />
            ))}
        </div>
    );
}

export default CategoryContainer;
