import styled, {css} from "styled-components"
export const Container = styled.section`
  width:100vw;
  height: 100vh;
  backdrop-filter: blur(3px);
  position:absolute;
  top:0;
  right:0;
  left:0;
  bottom:0;
  z-index: 5;
  display: flex;
  opacity: 0;
  pointer-events: none;
  align-items: center;
  justify-content: center;
  transform: translateY(50px);
  transition: .6s ;
  background: rgb(227,16,16);
  background: linear-gradient(0deg, rgba(227,16,16,0.9836309523809523) 0%, rgba(228,102,102,1) 100%);
  > svg{
    position: absolute; 
    right: 1rem;
    top: 1rem;
    cursor: pointer;

  }
  nav{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    transform:scale(0.7);
    transition: 0.5s;
  }
  a{
    text-decoration: none;
    font-size: 30px;
    color: #000;
  }
  ${({menuVisible})=> menuVisible && css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
    nav{
      transform:scale(1)
    }
  `}
`