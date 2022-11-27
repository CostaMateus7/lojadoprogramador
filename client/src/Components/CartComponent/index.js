import React, {useContext} from "react";
import Header from '../Header'
import Footer from "../Footer";
import { formatPrice } from "../../Money"
import { contextCart } from "../../Context/CartContext";
import { Container, CartItem, SectionTotal} from "./style";
import {GrSubtractCircle, GrAddCircle} from "react-icons/gr"
import { AiTwotoneDelete } from "react-icons/ai"


export default function CartComponent(){
  const { cart, removeProduct, updateProductAmount } = useContext(contextCart)




  const formatCart = cart.map(product => ({
    ...product, priceFormatted: formatPrice(product.Price), subtotal: formatPrice(product.Price * product.Amount)
  }))
  const total =
    formatPrice(
      formatCart.reduce((sumTotal, product) => {
        sumTotal += product.Price * product.Amount

        return sumTotal
      }, 0)
    )

  //Incrementar
  const handleIncrement = (product)=>{
    const increment = {
      IdProduct: product.id,
      Amount: product.Amount + 1
    }
    updateProductAmount(increment)
  }

  //Decrementar
  const handleDecrement = (product, IdProduct)=>{
    if(product.Amount > 1){
    const decrement = {
      IdProduct: product.id,
      Amount: product.Amount - 1
    }
    updateProductAmount(decrement)
  } else{
    remove(IdProduct)
  }
  }

  // Remover
  const remove = (Idproduct)=>{
    removeProduct(Idproduct)
  }

  return(
    <>
    <Header/>
    <Container>
      {formatCart.map(product => (
        <CartItem key={product.id}>
          <img src={product.avatar} alt={product.name} />
          <p>{product.name}</p>
          <p>{product.description}</p>
          <p>{product.subtotal}</p>
          <button
          type="button"
          onClick={()=> handleDecrement(product, product.id)}
          >
            <GrSubtractCircle size={20}/>
          </button>   

          <input type="text" onChange={()=>product.Amount} value={product.Amount} />

          <button
          type="button"
          onClick={()=> handleIncrement(product)}
          >
            <GrAddCircle size={20}/>
          </button>
          <button
          type="button"
          onClick={()=>{remove(product.id)}}
          >
          <AiTwotoneDelete size={20}/>
          </button>

        </CartItem>
      ))}
    </Container>
        <SectionTotal>
           <span>Total</span>
          <span>{total}</span>
          <button type="button">Finalizar Pedido</button>
        </SectionTotal>
    <Footer/>

    </>
  )
}