import React from 'react';
import './MenuButton.styles.scss';

function MenuButton({ handleMenuIconClick, isCategoryMenuOpen }) {
    return (
        <button
            type='button'
            onClick={handleMenuIconClick}
            aria-label='hamburger menu'
            className='hamburger'
        >
            <div
                className={`bar top ${isCategoryMenuOpen ? 'active' : ''}`}
            ></div>
            <div
                className={`bar middle ${isCategoryMenuOpen ? 'active' : ''}`}
            ></div>
            <div
                className={`bar bottom ${isCategoryMenuOpen ? 'active' : ''}`}
            ></div>
        </button>
    );
}

export default MenuButton;
