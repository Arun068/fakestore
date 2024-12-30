import React, {useContext} from "react"
import { ShopContext } from "./ShopContext"
import Product from "./Products";


export default function ProductsItems(props){
    // const {productid, productname, productimage, productprice } = props.data;
    // const { addToCart, cartItems } = useContext(ShopContext) ?? { addToCart: () => {},}  
    const { addToCart, cartItems } = useContext(ShopContext);
    //  ?? { addToCart: () => {},} for extra chaining to addToCart
    console.log("props object is " + props.productid);
    console.log(cartItems[props.productid]);
    const cartItemCount = cartItems[props.productid] || 0;
    return (
        <div className="col-4 mb-5 p-5">
            <h3 className="fs-3 text-center">{props.productname}</h3>
            <div className="d-flex justify-content-center py-5"><img  width="150px" src={props.productimage} alt="" /></div>
            <h5>Product Description:</h5>
            <p>{props.productdes}</p>
            <p className="fw-semibold float-end">${props.productprice}</p>
            <button className="btn btn-primary" onClick={() => addToCart(props.id)}>Add to cart {cartItemCount > 0 && ({cartItemCount})}</button>
        </div>
    )
}