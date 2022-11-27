import React, { useEffect } from "react";
import {Container} from "./style"
import { Link } from 'react-router-dom';
import { IoCloseSharp } from 'react-icons/io5'



export default function MenuMobile({menuVisible, setMenuVisible}){
  useEffect(()=>{
    document.body.style.overflowY = menuVisible ? 'hidden' : 'auto';
  }, [menuVisible])
  return(
  <Container menuVisible={menuVisible}>
    
    <IoCloseSharp size={45} onClick={()=> setMenuVisible(false)}/>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/camisa">Camisetas</Link>
      <Link to="/bone">Bonés</Link>
      <Link to="/meia">Meias</Link>
      <Link to="/moletom">Moletons</Link>
      <Link to="/caneca">Canecas</Link>
     
    </nav>
  </Container>
  )
}