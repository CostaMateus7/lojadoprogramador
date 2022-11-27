import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import {Container} from "./style"
import Black from "../../Components/Black"
import CardHome from "../CardHome";


export default function Home(){
  return(
    <>
    <Container>
    <Header/>
    <Black/>
    <CardHome/>
    <Footer/>
    </Container>
    </>
  )
}