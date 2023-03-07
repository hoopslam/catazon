import React from 'react';
import Button from '../button/Button';
import './ProductCard.styles.scss';

function ProductCard({ product }) {
    const { name, price, imageUrl } = product;
    return (
        <div className='product-card-container'>
            <img
                src={imageUrl}
                alt={name}
            />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button>Add to cart</Button>
        </div>
    );
}

export default ProductCard;
