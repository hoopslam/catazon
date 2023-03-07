import React from 'react';
import { BiTrash } from 'react-icons/bi';
import './CheckoutItem.styles.scss';

function CheckoutItem({ cartItem }) {
    const { name, imageUrl, price, quantity } = cartItem;

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img
                    src={imageUrl}
                    alt={`${name}`}
                />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>{quantity}</span>
            <span className='price'>{price}</span>

            <BiTrash className='remove-button' />
        </div>
    );
}

export default CheckoutItem;
