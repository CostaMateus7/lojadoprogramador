import React, {useContext, useEffect, useState} from "react";
import { PgCoat } from "../../Service/Api";
import { BsFillCartPlusFill } from "react-icons/bs";
import CardGeneric from "../CardGeneric";
import ContainerGeneric from "../ContainerGeneric";
import Paragrafo from "../Paragrafo";
import { contextCart } from "../../Context/CartContext";
export default function CardHome(){
  const [products, setProducts] = useState([]);
  const { addProduct } = useContext(contextCart)
  function handleAddProdut(IdProduct, productCategory){
    addProduct(IdProduct, productCategory)
  }

  useEffect(()=>{
    PgCoat()
    .then(
      (response)=>{
        const data = response.data
        setProducts(data)
      }
    )
    .catch((error)=>{
      console.log(error)
    })
  }, [])
  return(
    <>
    <ContainerGeneric>
      {products?.map((product,key)=>{
        return(
        <CardGeneric key={product.id}>
        
           <img src={product.avatar} alt={product.description}/> 
          <div>
          <p>{product.name}</p>
          <p>{product.description}</p>
          <Paragrafo>R$ {product.Price} <BsFillCartPlusFill size={35} onClick={()=>handleAddProdut(product.id, 'moletom')}/> </Paragrafo>
          </div>
          
        </CardGeneric>)
      })}
    </ContainerGeneric>
    </>
  )
}