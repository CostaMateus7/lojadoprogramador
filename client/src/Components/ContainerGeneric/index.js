import React from "react";
import {Container} from "./style"

export default function ContainerGeneric({children}){

  return(
  
        <Container>
          {children}
        </Container>
  )
}