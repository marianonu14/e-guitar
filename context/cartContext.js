import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    
    const addCart = (item) => {
        setCart([...cart, item])
    }

    const deleteCart = (newArray) => {
        setCart(newArray)
    }

    return <CartContext.Provider value={{cart , addCart, deleteCart}}>{children}</CartContext.Provider>
}