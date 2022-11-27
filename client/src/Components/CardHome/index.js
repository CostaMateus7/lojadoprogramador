import React, {useEffect, useState} from "react";
import { PgHome } from "../../Service/Api";
import CardGeneric from "../CardGeneric";
import ContainerGeneric from "../ContainerGeneric";
import Paragrafo from "../Paragrafo";

export default function CardHome(){
  const [products, setProducts] = useState([]);
  

  useEffect(()=>{
    PgHome()
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
    <ContainerGeneric>
      {products?.map((product,key)=>{
        return(
        <CardGeneric key={product.id}>
        
           <img src={product.avatar} alt={product.description}/> 
          <div>
          <p>{product.name}</p>
          <p>{product.description}</p>
          <Paragrafo> Confira os Preços!! </Paragrafo>
          </div>
                   
        </CardGeneric>)
      })}
    </ContainerGeneric>
  )
}