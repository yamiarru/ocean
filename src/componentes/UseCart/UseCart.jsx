// src/componentes/CartContext/useCart.jsx
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";

export const useCart = () => useContext(CartContext);
