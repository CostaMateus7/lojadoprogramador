import React, { useState }from "react";
import { ThemeProvider } from "styled-components";
import{
  BrowserRouter as Router,
  Route,
  Routes,
  // Navigate
} from 'react-router-dom'
import Home from "../Components/Home"
import Cap from "../Components/Cap"
import Coat from "../Components/Coat"
import Shirt from "../Components/Shirt"
import Mug from "../Components/Mug"
import Sock from "../Components/Sock"
import CartComponent from "../Components/CartComponent";
import { CartProvider } from "../Context/CartContext";
import GlobalStyle from '../Style/Global'
import { dark, light } from "../Style/Theme";




export default function AppRoutes(){
  const [ theme, setTheme ] = useState('light');
  const toggleTheme = ()=> {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  return(
    <Router>
      <ThemeProvider theme={theme === 'light' ? dark : light}>
      <GlobalStyle/>
      <CartProvider>
    <Routes>

      <Route exact path= "/" element={<Home/>}/>
      <Route exact path= "/bone" element={<Cap/>}/>
      <Route exact path= "/moletom" element={<Coat/>}/>
      <Route exact path= "/camisa" element={<Shirt/>}/>
      <Route exact path= "/caneca" element={<Mug/>}/>
      <Route exact path= "/meia" element={<Sock/>}/>
      <Route exact path= "/compras" element={<CartComponent/>}/>
    </Routes>
    <button onClick={()=>{toggleTheme()}}>Theme</button>
    </CartProvider>
      </ThemeProvider>
     
    </Router>
  )
}