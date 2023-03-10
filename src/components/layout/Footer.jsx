import React from 'react';
import './Footer.styles.scss';

function Footer() {
    return (
        <footer className='nav-footer-container'>
            <img
                src='/images/footerimage.png'
                className='footer-image'
                alt='cute hanging cat'
            />
            <p className='footer-author'>Made by David Cho</p>
            <p className='footer-disclaimer'>
                Disclaimer: Catazon is a non-commercial project built for demo
                purposes only.
            </p>
        </footer>
    );
}

export default Footer;
