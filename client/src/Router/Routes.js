import React from "react";
import{
  // BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'
import Home from "../Components/Home"
import Cap from "../Components/Cap"
import Coat from "../Components/Coat"
import Shirt from "../Components/Shirt"
import Mug from "../Components/Mug"
import Sock from "../Components/Sock"
import CartComponent from "../Components/CartComponent";

export default function AppRoutes(){
  
  return(
    // <Router>
    <Routes>
      <Route exact path= "/" element={<Home/>}/>
      <Route exact path= "/bone" element={<Cap/>}/>
      <Route exact path= "/moletom" element={<Coat/>}/>
      <Route exact path= "/camisa" element={<Shirt/>}/>
      <Route exact path= "/caneca" element={<Mug/>}/>
      <Route exact path= "/meia" element={<Sock/>}/>
      <Route exact path= "/compras" element={<CartComponent/>}/>
    </Routes> 
    // </Router>
  )
}