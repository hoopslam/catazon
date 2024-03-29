import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import Button from '../button/Button';
import './ProductCard.styles.scss';

function ProductCard({ product }) {
    const { addItemToCart } = useContext(CartContext);
    const { name, price, imageUrl } = product;

    const addProductToCart = () => addItemToCart(product);
    return (
        <div className='product-card-container'>
            <img
                src={imageUrl}
                alt={name}
            />
            <div className='product-footer'>
                <span>{name}</span>
                <span className='price'>{`$${price}`}</span>
            </div>
            <Button onClick={addProductToCart}>Add to cart</Button>
        </div>
    );
}

export default ProductCard;
