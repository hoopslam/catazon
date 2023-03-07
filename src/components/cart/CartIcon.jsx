import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './CartIcon.styles.scss';

function CartIcon({ onClick }) {
    return (
        <div
            className='cart-icon-container'
            onClick={onClick}
        >
            <AiOutlineShoppingCart className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    );
}

export default CartIcon;
