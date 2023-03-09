import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryItem.styles.scss';

function CategoryItem({ url, title }) {
    return (
        <Link
            to={`/shop/${title.toLowerCase()}`}
            className='category-container'
        >
            <div
                className='background-image'
                style={{
                    backgroundImage: `url(${url})`,
                }}
            />
            <div className='category-body-container'>
                <h2>{title}</h2>
            </div>
        </Link>
    );
}

export default CategoryItem;
