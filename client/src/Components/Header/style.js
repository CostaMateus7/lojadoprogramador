import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 130px;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 500px) {
      justify-content: space-around;
    }
`
export const Menu = styled.button`
  cursor: pointer;
  width: 30px;
  height: 30px;
  border: none;
  background-color: red;
  color: #fff;
  display: none;
  :hover{
  transform: scale(1.09);
  }
  @media screen and (max-width: 900px) {
      display: inline-block; 
      margin-left: 15px ;
  }
  `
export const FooterHeader = styled.header`
  width: 100%;
  height: 60px;
  border-bottom: solid 3px red;
  display:flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;

  a{
    text-decoration: none;
    font-size: 20px;
    margin: 40px;
    color: #000;
    font-weight: 400;

  }
  @media screen and (max-width: 900px) {
      a{
        margin: 15px;
      }
      
    }
  @media screen and (max-width: 900px) {
      display: none;

    }
`
export const Title = styled.h1`
  margin-left: 25px;
  font-size: 50px;
  color: #fff;
  @media screen and (max-width: 500px) {
      font-size: 30px;
      margin-left: 0px;
      margin-left: 0;

    }

`
export const Sale = styled.button`
  cursor: pointer;
  position:relative;
  width: 30px;
  height: 30px;
  margin-right: 100px;
  border: none;
  background-color: red;
  color: #fff;
  div{
    border-radius: 50%;
    background-color: rgb(128,0,0);
    position: absolute;
    cursor:pointer;
    color:#fff;
    padding:4px;
    border: none;
    transform: scale(1.1);
    right: -5px;
    top: -7px

  }
  :hover{
  transform: scale(1.09);
  
  }
  @media screen and (max-width: 520px) {
    margin-right: 10px;
  }

`
