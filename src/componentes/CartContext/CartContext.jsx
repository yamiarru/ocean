import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext({});

export const CartContextProvider = ({ children }) => {
  const [productsInCart, setProductsInCart] = useState([]);

  const addProductToCart = (productToAdd) => {
    setProductsInCart([...productsInCart, productToAdd]);
  };

  const removeProductFromCart = (productId) => {
    setProductsInCart(productsInCart.filter(item => item.product.productId !== productId));
  };

  const clearCart = () => {
    setProductsInCart([]);
  };

  const totalQuantity = productsInCart.reduce((accum, currentValue) => accum + currentValue.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        productsInCart,
        addProductToCart,
        removeProductFromCart,
        clearCart,
        totalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};