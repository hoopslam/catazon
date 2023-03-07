import { createContext, useState } from 'react';

const addCartItem = (cartItems, productToAdd) => {
    //find if cartITems contains productToAdd
    const foundItem = cartItems.find((item) => item.id === productToAdd.id);
    //If Found, increment quantity
    if (foundItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }
    //return new array with modified cartItems/ new cart item
    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const decrementCartItem = (cartItems, productToDecrement) => {
    const foundItem = cartItems.find(
        (cartItem) => cartItem.id === productToDecrement.id
    );
    if (foundItem.quantity === 1) {
        return removeCartItem(cartItems, productToDecrement);
    }
    return cartItems.map((cartItem) =>
        cartItem.id === productToDecrement.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
};

const removeCartItem = (cartItems, productToRemove) => {
    return cartItems.filter((item) => item.id !== productToRemove.id);
};

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    decrementItemFromCart: () => {},
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    };

    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove));
    };

    const decrementItemFromCart = (productToDecrement) => {
        setCartItems(decrementCartItem(cartItems, productToDecrement));
    };

    const value = {
        isCartOpen,
        cartItems,
        setIsCartOpen,
        addItemToCart,
        removeItemFromCart,
        decrementItemFromCart,
    };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};
