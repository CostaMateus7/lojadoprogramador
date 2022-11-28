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
      <Link to="/" onClick={()=> setMenuVisible(false)}>Home</Link>
      <Link to="/camisa" onClick={()=> setMenuVisible(false)}>Camisetas</Link>
      <Link to="/bone" onClick={()=> setMenuVisible(false)}>Bonés</Link>
      <Link to="/meia" onClick={()=> setMenuVisible(false)}>Meias</Link>
      <Link to="/moletom" onClick={()=> setMenuVisible(false)}>Moletons</Link>
      <Link to="/caneca" onClick={()=> setMenuVisible(false)}>Canecas</Link>
     
    </nav>
  </Container>
  )
}