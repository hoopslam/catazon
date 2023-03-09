import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/product/ProductCard';
import { ProductContext } from '../../contexts/ProductsContext';
import '../../routes/shop/ShopLayout.styles.scss';

//TODO: Slider
function Shop() {
    const { products } = useContext(ProductContext);
    return (
        <>
            {Object.keys(products).map((title) => (
                <>
                    <Link to={`/shop/${title}`}>
                        <h2 className='shop-category-title'>
                            {title.toUpperCase()}
                        </h2>
                    </Link>

                    <div className='products-container'>
                        {products[title].slice(0, 3).map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </div>
                </>
            ))}
        </>
    );
}

export default Shop;
