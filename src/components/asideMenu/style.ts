import styled, { css } from "styled-components";

interface Props {
   visible: any
}

export const Aside = styled.aside<Props>`
   position: fixed;
   z-index: 999;
   right: 0;
   top: 0;
   width: 486px;
   height: 100vh;
   background-color: #0F52BA;
   box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
   transform: translateX(100%);
   transition: all 2s;

   button{
      background: none;
   }

   ${({visible})=> visible && css`
       transform: translateX(0);
   `}
`

export const TitleDiv = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 40px;

    button{
       width: 38px;
       height: 38px;
       background-color: #FFF;
       border-radius: 38px;
    }
`

export const TextTitle = styled.p`
  color: #fff;
  font: 700 1.688rem/2.063rem 'Montserrat', sans-serif  ;
`

export const CardElement = styled.div`
   width: 379px;
   margin-left: 47px;
   height: 330px;
   overflow-x: auto;

   ::-webkit-scrollbar{
      display: none;
   }
`

export const CartProducts = styled.div`
    width: 100%;
    height: 95px;
    background-color: #FFF;
    margin-bottom: 28px;
    border-radius: 8px;
    box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
`

export const FooterDiv = styled.div`
   width: 100%;
   position: absolute;
   bottom: 0;
   p{
    font: normal 700 1.75rem/0.938rem 'Montserrat', sans-serif; 
    margin-bottom: 40px;
    margin-left: 47px;
    color: #FFF;
    span{
       margin-left: 204px;
    } 
   }
   button{
     width: 100%;
     height: 97px;
     background-color: #000;
     color: #FFF;
     font: normal 700 1.75rem/0.938rem 'Montserrat', sans-serif; 
   }
`