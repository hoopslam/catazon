import React, { useContext } from 'react';
import ProductCard from '../components/product/ProductCard';
import { ProductContext } from '../contexts/ProductsContext';
import './Shop.styles.scss';

function Shop() {
    const { products } = useContext(ProductContext);
    return (
        <div className='products-container'>
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                />
            ))}
        </div>
    );
}

export default Shop;
