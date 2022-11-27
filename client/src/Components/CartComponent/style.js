import styled from "styled-components";


export const Container = styled.section`
  max-width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`

export const CartItem = styled.div`
  width: 70%;
  height: 130px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
  p{
    font-size: 23px;
  }
  img{
    width: 100px;
    height: 100px;
  }
  input{
    border: none;
    width: 30px;
    font-size: 20px;
    text-align: center;

  }
  button svg{
    background-color: white;
    border: none;
    size: 15;
  }
  @media screen and (max-width: 600px) {
  p{
    display: none;
  }

  }
`
export const SectionTotal = styled.section`
  width: 70%;
  background-color: #fff;
  height: 130px;
  display: flex;
  flex-direction: row;
  border-radius: 7px;
  justify-content: space-around;
  margin: auto;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  span{
    font-size: 30px;
  }
  @media screen and (max-width: 600px) {
  span{
    font-size: 25px;
  }
  }

  button{
    width: 120px;
    height: 50px;
    border: none;
    border-radius: 5px;
    color: #000;
    background-color: red;
    cursor: pointer;
    :hover{
      opacity: 0.8;
      transform: scale(1.05);
    }
  @media screen and (max-width: 600px) {
  button{
    width: 100px;
    height: 40px;
  }  
    
  }
}
`
