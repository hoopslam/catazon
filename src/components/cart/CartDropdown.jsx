import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import Button from '../button/Button';
import CartItem from './CartItem';
import './CartDropdown.styles.scss';
import { IoMdPaw } from 'react-icons/io';

function CartDropdown() {
    const { cartItems } = useContext(CartContext);

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((cartItem) => (
                    <CartItem
                        key={cartItem.id}
                        cartItem={cartItem}
                    />
                ))}
            </div>
            <Button>
                <IoMdPaw className='paw-out' />
                Checkout
            </Button>
        </div>
    );
}

export default CartDropdown;
