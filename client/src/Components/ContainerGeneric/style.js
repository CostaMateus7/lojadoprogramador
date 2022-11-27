import styled from "styled-components";

export const Container= styled.section`
  width: 100%;
  min-height: 90vh;
  display: flex ;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  margin-top: 20px;
  @media screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: auto ;
 }
 @media screen and (max-width: 300px) {
    display: grid;
    grid-template-columns: auto ;
 }
`