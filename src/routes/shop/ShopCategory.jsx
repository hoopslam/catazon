import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product/ProductCard';
import { ProductContext } from '../../contexts/ProductsContext';
import './ShopLayout.styles.scss';
import { BallTriangle } from 'react-loader-spinner';

function ShopCategory() {
    const { category } = useParams();
    const { products } = useContext(ProductContext);
    const [categoryProducts, setCategoryProducts] = useState(
        products[category]
    );
    console.log(categoryProducts);

    useEffect(() => {
        setCategoryProducts(products[category]);
    }, [category, products]);
    return (
        <>
            {categoryProducts ? (
                <>
                    <h2 className='shop-category-title'>
                        {category.toUpperCase()}
                    </h2>
                    <div className='products-container'>
                        {categoryProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </div>
                </>
            ) : (
                <BallTriangle
                    height={100}
                    width={100}
                    radius={5}
                    color='#ffc107'
                    ariaLabel='loading'
                    visibile={true}
                />
            )}
        </>
    );
}

export default ShopCategory;
