import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
   *{
      margin: 0;
      padding: 0;
      outline: none;
   }

   html, body, #root{
      min-width: 100vw;
      min-height: 100vh;
      overflow-x: hidden;
   }

   body{
     background-color: #E5E5E5;
   }

   button{
     cursor: pointer;
     border: none;
     outline: none;
   }
`