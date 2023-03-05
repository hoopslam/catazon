import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './navigation.styles.scss';

function Navigation() {
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
                        className='nav-link'
                        to='/shop'
                    >
                        Shop
                    </Link>
                </div>
            </nav>
            <Outlet />
        </>
    );
}

export default Navigation;
