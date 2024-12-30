import Products from "./Products";
// import ProductList from "./ProductsItems"
// import Navbar from "./Navbar";

function Home(){
    return(
        <>
        {/* <Navbar/> */}
        <div className="container">
            <div className="row">
               <div className="col-12 my-4 ">
               <div className="row">
                {/* {ProductList} */}

                <Products/>


                </div>
                
                 {/* <h1 className="text-center ">HAMRO STORE</h1> */}
        
               </div>
             </div>
            
           </div>
           </>
    )
}

export default Home