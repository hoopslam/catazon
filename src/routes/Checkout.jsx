import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import CheckoutItem from '../components/checkout/CheckoutItem';
import './Checkout.styles.scss';

function Checkout() {
    const { cartItems } = useContext(CartContext);

    return (
        <div className='checkout-container'>
            {cartItems.map((cartItem) => {
                return (
                    <CheckoutItem
                        key={cartItem.id}
                        cartItem={cartItem}
                    />
                );
            })}
            <span className='total'>{`Total: ${cartItems.reduce(
                (acc, cartItem) => acc + cartItem.price * cartItem.quantity,
                0
            )}`}</span>
        </div>
    );
}

export default Checkout;
