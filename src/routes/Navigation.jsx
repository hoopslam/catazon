import React, { useContext } from 'react';
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
    const { currentUser } = useContext(UserContext);
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);

    return (
        <>
            <nav className='navigation'>
                <Link
                    className='logo-container'
                    to='/'
                >
                    <img
                        src='/images/logo.png'
                        className='logo'
                        alt='logo'
                    />
                </Link>
                <div className='nav-links-container'>
                    {/* <Link
                        to='/shop'
                        className='nav-link'
                    >
                        <span>Shop</span>
                    </Link> */}
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
                    isOpen={isCartOpen}
                    onClick={() => setIsCartOpen(false)}
                />
            </nav>
            <Outlet />
            <Footer />
        </>
    );
}

export default Navigation;
