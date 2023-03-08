import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { BiTrash } from 'react-icons/bi';
import './CheckoutItem.styles.scss';

function CheckoutItem({ cartItem }) {
    const { name, imageUrl, price, quantity } = cartItem;
    const { removeItemFromCart, addItemToCart, decrementItemFromCart } =
        useContext(CartContext);

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img
                    src={imageUrl}
                    alt={`${name}`}
                />
            </div>
            <div className='item-description'>
                <p>{name}</p>
                <p>${price}</p>
            </div>
            <div className='quantity interactive'>
                <span
                    className='change-quantity'
                    onClick={() => addItemToCart(cartItem)}
                >
                    +
                </span>
                <p>{quantity}</p>
                <span
                    className='change-quantity'
                    onClick={() => decrementItemFromCart(cartItem)}
                >
                    -
                </span>
            </div>
            <div className='remove-button-container interactive'>
                <BiTrash
                    className='remove-button'
                    onClick={() => removeItemFromCart(cartItem)}
                />
            </div>
        </div>
    );
}

export default CheckoutItem;
