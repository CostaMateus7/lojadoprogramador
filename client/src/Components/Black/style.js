import styled from "styled-components";


export const SectionBlack = styled.div`
  width: 100%;
  background-color: black;
  margin-top: 0px;
  
  h1{
  padding-top:20px;
  color: #fff;
  text-align: center;
  font-size: 70px;
  letter-spacing: 5px;
  }
  p{
    color: #fff;
    text-align: center;
    font-size: 40px;
    padding: 20px;
    padding-bottom:50px;
  }
  @media screen and (max-width: 600px) {
  h1{
    font-size: 40px ;
  }
  p{
    font-size: 20px;
  }
  height: 40%;
  width: 100%;
  }
`
  
 
