import React from 'react';
import './CartDropdownOverlay.styles.scss';

function CartDropdownOverlay({ onClick, isOpen }) {
    if (isOpen)
        return (
            <div
                className='overlay-container'
                onClick={onClick}
            />
        );
}

export default CartDropdownOverlay;
