import React  from "react"
import "bootstrap/dist/css/bootstrap.css"
import { BrowserRouter,Routes,Route, Router } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import Navbar from "./Navbar";


function App() {
  return (
    <>
    <BrowserRouter>
       <Routes >
         <Route path="/" element={<Navbar/>}>
            <Route index element={<Home/>}/>
            <Route path="cart" element={<Cart/>}/>
          </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App
