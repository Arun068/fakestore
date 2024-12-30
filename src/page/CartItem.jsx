import React, { useContext} from "react";
import { ShopContext } from "../ShopContext";

export const cartItem = (props) => {
    const { productid, productname, productimage, productprice } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

    return (
        <h1>hello</h1>
    )
}