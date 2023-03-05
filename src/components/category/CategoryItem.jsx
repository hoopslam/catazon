import React from 'react';
import './CategoryItem.styles.scss';

function CategoryItem({ url, title }) {
    return (
        <div className='category-container'>
            <div
                className='background-image'
                style={{
                    backgroundImage: `url(${url})`,
                }}
            />
            <div className='category-body-container'>
                <h2>{title}</h2>
            </div>
        </div>
    );
}

export default CategoryItem;
