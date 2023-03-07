import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './CartIcon.styles.scss';

function CartIcon({ onClick }) {
    const { cartItems } = useContext(CartContext);
    return (
        <div
            className='cart-icon-container'
            onClick={onClick}
        >
            <AiOutlineShoppingCart className='shopping-icon' />
            <span className='item-count'>
                {cartItems.reduce(
                    (acc, cartItem) => acc + cartItem.quantity,
                    0
                )}
            </span>
        </div>
    );
}

export default CartIcon;
