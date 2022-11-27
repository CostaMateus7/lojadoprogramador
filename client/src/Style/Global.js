import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin:0px;
    padding:0px;
    box-sizing:border-box;
  }
  body{
    font-family: 'Oswald', sans-serif;
    overflow:hidden;
    background-color: ${props => props.theme.body}
  }
`
