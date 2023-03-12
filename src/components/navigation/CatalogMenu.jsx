import React from 'react';
import { Link } from 'react-router-dom';
import './CatalogMenu.styles.scss';

function CatalogMenu({ isOpen, toggleMenu }) {
    return (
        <div className={`catalog-menu-container ${isOpen ? `open` : ``}`}>
            <ul className='catalog-list-container'>
                <Link
                    className='catalog-list-item'
                    to='/shop/wet%20food'
                    onClick={toggleMenu}
                >
                    <li>Wet Food</li>
                </Link>

                <Link
                    className='catalog-list-item'
                    to='/shop/dry%20food'
                    onClick={toggleMenu}
                >
                    <li>Dry Food</li>
                </Link>

                <Link
                    className='catalog-list-item'
                    to='/shop/snacks'
                    onClick={toggleMenu}
                >
                    <li>Snacks</li>
                </Link>

                <Link
                    className='catalog-list-item'
                    to='/shop/clothes'
                    onClick={toggleMenu}
                >
                    <li>Clothes</li>
                </Link>

                <Link
                    className='catalog-list-item'
                    to='/shop/toys'
                    onClick={toggleMenu}
                >
                    <li>Toys</li>
                </Link>

                <Link
                    className='catalog-list-item'
                    to='/shop/furniture'
                    onClick={toggleMenu}
                >
                    <li>Furniture</li>
                </Link>
            </ul>
        </div>
    );
}

export default CatalogMenu;
