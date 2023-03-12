import React, { useContext, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './navigation.styles.scss';
import { UserContext } from '../contexts/UserContext';
import { CartContext } from '../contexts/CartContext';
import { signOutUser } from '../utils/firebase/firebase.utils';
import CartIcon from '../components/cart/CartIcon';
import CartDropdown from '../components/cart/CartDropdown';
import CartDropdownOverlay from '../components/cart/CartDropdownOverlay';
import Footer from '../components/layout/Footer';

function Navigation() {
    const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
    const { currentUser } = useContext(UserContext);
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);

    const handleMenuIconClick = () => {
        setIsCategoryMenuOpen((prev) => !prev);
    };

    return (
        <>
            <nav className='navigation'>
                <div className='left-navigation-container'>
                    <div
                        onClick={handleMenuIconClick}
                        aria-label='hamburger menu'
                        className='hamburger'
                    >
                        <div
                            className={`bar top ${
                                isCategoryMenuOpen ? 'active' : ''
                            }`}
                        ></div>
                        <div
                            className={`bar middle ${
                                isCategoryMenuOpen ? 'active' : ''
                            }`}
                        ></div>
                        <div
                            className={`bar bottom ${
                                isCategoryMenuOpen ? 'active' : ''
                            }`}
                        ></div>
                    </div>
                    <div className='logo-container'>
                        <Link to='/'>
                            <img
                                src='/images/logo.png'
                                className='logo'
                                alt='logo'
                            />
                        </Link>
                    </div>
                </div>
                <div className='nav-links-container'>
                    {currentUser ? (
                        <div className='nav-link'>
                            <span onClick={signOutUser}>Sign Out</span>
                        </div>
                    ) : (
                        <Link
                            to='/authentication'
                            className='nav-link'
                        >
                            <span>Sign In</span>
                        </Link>
                    )}
                    <CartIcon onClick={() => setIsCartOpen(!isCartOpen)} />
                    <CartDropdown isOpen={isCartOpen} />
                </div>
                <CartDropdownOverlay
                    isOpen={isCartOpen || isCategoryMenuOpen}
                    onClick={() => {
                        setIsCartOpen(false);
                        setIsCategoryMenuOpen(false);
                    }}
                />
            </nav>
            <Outlet />
            <Footer />
        </>
    );
}

export default Navigation;
