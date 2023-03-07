import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './navigation.styles.scss';
import { UserContext } from '../contexts/UserContext';
import { signOutUser } from '../utils/firebase/firebase.utils';

function Navigation() {
    const { currentUser } = useContext(UserContext);
    console.log(currentUser);

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
                    <Link
                        to='/shop'
                        className='nav-link'
                    >
                        <span>Shop</span>
                    </Link>
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
                </div>
            </nav>
            <Outlet />
        </>
    );
}

export default Navigation;
