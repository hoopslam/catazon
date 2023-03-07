import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import Button from '../button/Button';
import CartItem from './CartItem';
import './CartDropdown.styles.scss';
import { IoMdPaw } from 'react-icons/io';

function CartDropdown() {
    const { cartItems, setIsCartOpen } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckout = () => {
        setIsCartOpen(false);
        navigate('/checkout');
    };

    return (
        <div
            className='cart-dropdown-container'
            onClick={(e) => e.stopPropagation()}
        >
            <div className='cart-items'>
                {cartItems.map((cartItem) => (
                    <CartItem
                        key={cartItem.id}
                        cartItem={cartItem}
                    />
                ))}
            </div>
            <Button
                color='orangeInverted'
                onClick={goToCheckout}
            >
                <IoMdPaw className='paw-out' />
                Checkout
            </Button>
        </div>
    );
}

export default CartDropdown;
