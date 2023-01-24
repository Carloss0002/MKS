import { createSlice } from "@reduxjs/toolkit";
import produce from "immer";

let initialElement:any = {
    products: []
}

export const CART_PRODUCTS = createSlice({
       name: 'cart',
       initialState: initialElement,
       reducers:{
          add: (state, action)=>{
              return produce(state, (draft:any)=>{
                 const INDEX_PRODUCTS = draft.products.findIndex((product:any)=>product.id === action.payload.id)

                 if(INDEX_PRODUCTS >= 0){
                    alert('já adicionado')
                 } else {
                    draft.products.push(action.payload)
                 }
              })

          }
       }
})

export const { add } = CART_PRODUCTS.actions

export default CART_PRODUCTS.reducer