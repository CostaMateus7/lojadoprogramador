import styled from "styled-components";

export const Card = styled.div`
  width: 280px;
  height: 350px;
  margin: 20px;
  border: solid 2px #fff;
  border-radius: 5px;
  box-shadow: 2px 2px 5px 2px black;
  display: flex;
  flex-direction: column;
  background-color: #fff;

  svg{
    margin-left: 150px;
    margin-bottom: 10px;
    cursor: pointer;
  }
  img{
    width: 80%;
    height: 70%;
    margin: auto;
  }
  div{
    bottom: 2px;
    margin-left: 7px;
  }
  @media screen and (max-width: 600px) {
    margin: 0;
    width: 290px;
    height: 330px;
    margin: 8px;
    svg{
      margin-left: 150px;

    }
 }
`