import React from "react";
import ProductsItems from "./ProductsItems";
function Products(){

const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  
  
  React.useEffect(() => {
    setLoading(true);
    fetch(
      "https://fakestoreapi.com/products"
    )
    .then((res) => res.json())
    .then((data) => setProducts(data))
    .then(setLoading(false));
  },[] );
  
  console.log(products);
  
  const ProductList = products.map(function(item){
    return (
      <ProductsItems
      key={item.id}
      productid={item.id}
      productimage={item.image}
      productdes={item.description}
      productprice={item.price}
      productname={item.title}
      productoption={item.category}
      productrating={item.rating.rate}>
      </ProductsItems>
    )
  })

  return (
    <div className="row">
        {ProductList}
    </div>
  )
}

export default Products