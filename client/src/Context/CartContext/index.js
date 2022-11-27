import React, { createContext, useState } from "react";
import { Api } from "../../Service/Api";


export const contextCart = createContext()

export function CartProvider({children}){
  
 
  const storageCart = localStorage.getItem('Cart_item_local');
  
  const [cart, setCart] = useState((!storageCart) ? [] : JSON.parse(storageCart))

   
  
  const addProduct = async (IdProduct, productCategory)=>{
   try{ 
    const productInCart = cart.find(product => product.id === IdProduct)
      if(!productInCart){
      const { data: product } = await Api.get(`/${productCategory}/${IdProduct}`)
      setCart([...cart, {...product, Amount: 1 }])
      localStorage.setItem('Cart_item_local', JSON.stringify([...cart, {...product }]))
      console.log('Item adicionado')
      return
  }
    if(productInCart){
      const updateCart = cart.map((cartItem) => cartItem.id === IdProduct ? {
        ...cartItem,
        Amount: Number(cartItem.Amount) + 1
      } : cartItem)
      setCart(updateCart)
      localStorage.setItem('Cart_item_local', JSON.stringify(updateCart))
      return
    }
}
  
  catch(error){
    console.log(error)
  }
  }
  const removeProduct = (IdProduct)=>{
    try{
      const productExists = cart.some(cartProduct => cartProduct.id === IdProduct)
      if(!productExists){
        console.log("Erro ao excluir o produto!")
        return
      }
      const updateCart = cart.filter(cartProduct => cartProduct.id !== IdProduct)
      setCart(updateCart)
      localStorage.setItem('Cart_item_local', JSON.stringify(updateCart))
    }
    catch{
      console.log("Erro ao excluir o produto!")
    }
  }
  const updateProductAmount =  ({IdProduct, Amount})=>{
    try{
      const productExists = cart.some(productCart => productCart.id === IdProduct)
    if(!productExists){
      return(
        console.log('Erro na atualização do produto')
      )
    }
    const updateCart = cart.map(cartItem => cartItem.id === IdProduct ? {
      ...cartItem, 
      Amount: Amount
    }: cartItem)
    setCart(updateCart)
    localStorage.setItem('Cart_item_local', JSON.stringify(updateCart))
  } catch(error){
    console.log('Erro na alteração do produto')
  }
}

  return(
    <contextCart.Provider value={{cart, setCart, addProduct, removeProduct, updateProductAmount}}>
      {children}
    </contextCart.Provider>
  )
}