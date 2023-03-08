import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import Button from '../button/Button';
import CartItem from './CartItem';
import './CartDropdown.styles.scss';
import { IoMdPaw } from 'react-icons/io';

function CartDropdown({ isOpen }) {
    const { cartItems, setIsCartOpen } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckout = () => {
        setIsCartOpen(false);
        navigate('/checkout');
    };
    if (isOpen)
        return (
            <div
                className='cart-dropdown-container'
                onClick={(e) => e.stopPropagation()}
            >
                <div className='cart-items'>
                    {cartItems.length ? (
                        cartItems.map((cartItem) => (
                            <CartItem
                                key={cartItem.id}
                                cartItem={cartItem}
                            />
                        ))
                    ) : (
                        <p>Add items to your cart!</p>
                    )}
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
