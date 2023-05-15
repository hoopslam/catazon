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
import MenuButton from '../components/navigation/MenuButton';
import CatalogMenu from '../components/navigation/CatalogMenu';
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Navigation() {
    const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
    const { currentUser } = useContext(UserContext);
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsCategoryMenuOpen((prev) => !prev);
    };

    return (
        <>
            <nav className='navigation'>
                <div className='left-navigation-container'>
                    <MenuButton
                        isCategoryMenuOpen={isCategoryMenuOpen}
                        handleMenuIconClick={toggleMenu}
                    />
                    <CatalogMenu
                        isOpen={isCategoryMenuOpen}
                        toggleMenu={toggleMenu}
                    />
                    <h2
                        className='logo'
                        onClick={() => navigate('/')}
                    >
                        Catazon
                    </h2>
                </div>
                <div className='nav-links-container'>
                    <div className='nav-link'>
                        <FaUserCircle className='user-icon' />
                        {currentUser ? (
                            <span
                                className='nav-text'
                                onClick={signOutUser}
                            >
                                sign out
                            </span>
                        ) : (
                            <Link
                                to='/authentication'
                                className='nav-link'
                            >
                                <span className='nav-text'>sign in</span>
                            </Link>
                        )}
                    </div>
                    <div
                        className='nav-link'
                        onClick={() => setIsCartOpen(!isCartOpen)}
                    >
                        <CartIcon />
                        <span className='nav-text'>cart</span>
                    </div>
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
