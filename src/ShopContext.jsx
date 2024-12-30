import { createContext, useEffect, useState } from "react";
import Product from "./Products";
import React from "react";


  

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i <21; i++){
        cart[i] = 0;
    }
    return cart;
};

export const ShopContextProvider = (props) => {
    const [products, setProducts] = React.useState([]);
    //   const [loading, setLoading] = React.useState(false);
      
      
      React.useEffect(() => {
        setLoading(true);
        fetch(
          "https://fakestoreapi.com/products"
        )
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .then(setLoading(false));
      },[] );

    const [cartItems, setCartItems] = useState(getDefaultCart());

    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for (const item in cartIems){
            if (cartIems[item] > 0){
                let itemInfo = Product.find((product) => product.id === Number(item));
                totalAmount += cartIems[item] * itemInfo.price;
                totalAmount = totalAmount + (cartIems[item] * itemInfo.price);
            }
        }
        return totalAmount;
    }

    const addToCart = (itemId) => {
        setCartItems ((prev) => ({...prev, [itemId]: prev[itemId] + 1 }));
        console.log(cartItems);
    }
    const contextValue = {
    cartItems,
    addToCart,
    // updateCartItemCount,
    // removeFromCart,
    // getTotalCartAmount,
    // checkout,
    }

    console.log(cartItems);

    return (
        <ShopContext.Provider value={{contextValue}}>
      {props.children}
    </ShopContext.Provider>
    )
}