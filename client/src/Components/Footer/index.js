import React from "react";
import {Container, Card, Par, Rodape} from './style'
import { FaCcVisa, FaCcMastercard, FaPaypal } from 'react-icons/fa'
import {SiAmericanexpress, SiNubank} from 'react-icons/si'



export default function Footer(){

  return(
    <Container>
      <Par>Aceitamos Cartão</Par>
     <Card>
     <span><FaCcMastercard size={26}/></span> 
     <span><FaCcVisa size={26}/></span> 
     <span><FaPaypal size={26}/></span> 
     <span><SiAmericanexpress size={26}/></span> 
     <span> <SiNubank size={26}/></span> 
     </Card>  
     <Rodape>&copy;Loja Do Programador</Rodape>
     <Rodape>Todos os direitos reservados</Rodape>
    </Container>
  )
}