import styled, { keyframes } from "styled-components";


const animation = keyframes`
   from{
     transform: rotate(0deg);
   }

   to{
     transform: rotate(360deg);
   }
`

export const CardSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    height: 100vh;
    padding: 217px  110px;
`

export const AreaButton = styled.div`
   display: flex;
   justify-content: center;
   margin-bottom: 107px;
   button{
       padding: 10px;
       border-radius: 5px;
       background-color: #F8CC49;
       color: #FFF;
       font: normal 700 1rem/1rem 'Montserrat', sans-serif;
   }
`

export const Loading = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .loading{  
    width: 200px;
    height: 200px;
    border-top: 10px solid #0F52BA;
    border-width: 2px solid #000;
    border-radius: 200px;
    animation: ${animation} 2s linear infinite both;
   }
`
