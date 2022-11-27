import React from "react";
import {Card} from "./style"

export default function CardGeneric({children}){

  return(
  
        <Card>
          {children}
        </Card>
  )
}