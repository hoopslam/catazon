import { createContext, useState } from 'react';
import { SHOP_DATA } from '../util/constants';

export const ProductContext = createContext({
    products: [],
});

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState(SHOP_DATA);
    const valueObject = { products };

    return (
        <ProductContext.Provider value={valueObject}>
            {children}
        </ProductContext.Provider>
    );
};
