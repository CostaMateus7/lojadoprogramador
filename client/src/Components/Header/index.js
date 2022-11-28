import React, { useState, useContext } from "react";
import { HeaderContainer, Title, Sale, FooterHeader, Menu} from './style'
import { SlBasket } from 'react-icons/sl'
import { GiHamburgerMenu } from 'react-icons/gi'
import './style.css'
import { Link } from 'react-router-dom';
import MenuMobile from "../MenuMobile"
import { contextCart } from "../../Context/CartContext";
import { dark } from "../../Style/Theme";

export default function Header({onToggleTheme, selectedTheme}){
  const { cart } = useContext(contextCart)
  const [mobile, setMobile] = useState(false);
  const cartSize = cart.length;
  return(
    <> 
    <MenuMobile
    menuVisible={mobile}
    setMenuVisible={setMobile}
    />
    <HeaderContainer>
      <Menu>
       <GiHamburgerMenu className="menu" onClick={()=>setMobile(true)}/>
      </Menu>
        <Title>Loja do Programador</Title>
        <span>
        <button 
          onClick={onToggleTheme}
         >
          
          {selectedTheme === dark ? '🌞' : '🌚'}
        </button> 
        </span>
   
      <Sale>
        <div>{cartSize }</div>
        <Link to="/compras"><SlBasket className="icone"/></Link>
        
      </Sale>
    </HeaderContainer>

    <FooterHeader>
      <Link to="/">Home</Link>
      <Link to="/camisa">Camisetas</Link>
      <Link to="/bone">Bonés</Link>
      <Link to="/meia">Meias</Link>
      <Link to="/moletom">Moletons</Link>
      <Link to="/caneca">Canecas</Link>
    </FooterHeader>
    </>
  )
}