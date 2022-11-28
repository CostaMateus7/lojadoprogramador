import GlobalStyle from "./Style/Global";
import AppRoutes from "./Router/Routes";
import Header  from "./Components/Header";
import { ThemeProvider } from "styled-components";
import { dark, light } from "./Style/Theme"
import React, { useMemo, useState } from "react";
import Footer from "./Components/Footer";
import { CartProvider } from "../src/Context/CartContext";
import{
  BrowserRouter as Router,
} from 'react-router-dom'

function App() {
  const [theme, setTheme ] = useState(dark)

  const currentTheme = useMemo(()=>{
    return theme || dark

  },[theme])
  function handleToggleTheme(){
    setTheme(prevState => prevState === dark ? light : dark)
  }
  return (
    <ThemeProvider theme={currentTheme}>
    <GlobalStyle/>
    <CartProvider>
    <Router>
    <Header 
    onToggleTheme = {handleToggleTheme}
    selectedTheme = {theme}
    />
    <AppRoutes/>
    <Footer/>
    </Router>
    </CartProvider>
    </ThemeProvider>
  );
}

export default App;
