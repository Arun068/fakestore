import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import './App.css'


export default function Navbar() {
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-6">
                <h1 className="float-end mt-3">Hamro Store</h1>
                </div>
            
            <div className="col-6">
                <div className="float-end pt-3">
                <Link to="/" className="text-decoration-none text-black me-2 fs-4"> Shop </Link>
                <Link to="/cart"><img src="./cart.png" className="wid"/></Link></div>
            </div>
            
            </div>
            <Outlet/>
        </div>
        </>
    )
}

// export default function Layout(){
    
//     return (
//         <div className="container">
//         <div className="row">
//         <div className="col-12 my-4 ">
//         <Navbar/>
        
//         </div>
//         </div>
//         <div className="row">{ProductList}</div>
//         <Outlet/>
//         </div>
//     )
    
// }
