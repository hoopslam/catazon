import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import './CartItem.styles.scss';

function CartItem({ cartItem }) {
    const { name, imageUrl, price, quantity } = cartItem;
    const { removeItemFromCart } = useContext(CartContext);

    return (
        <div className='cart-item-container'>
            <img
                src={imageUrl}
                alt={name}
            />
            <div className='item-details'>
                <span className='item-name'>{name}</span>
                <span className='item-price'>{`$${price}${
                    quantity > 1 ? ` x ${quantity}` : ``
                }`}</span>
            </div>
            <div
                className='remove-item'
                onClick={() => removeItemFromCart(cartItem)}
            >
                X
            </div>
        </div>
    );
}

export default CartItem;
