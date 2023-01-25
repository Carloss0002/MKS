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
                 const INDEX_PRODUCTS = draft.products.findIndex((product:any)=>product.product.id === action.payload.id)
                 if(INDEX_PRODUCTS >= 0){
                    draft.products[INDEX_PRODUCTS].quantity += 1
                 } else {
                    draft.products.push({
                       product: action.payload,
                       quantity: 1
                    })
                 }
              })

          },
          remove: (state, action)=>{
             return produce(state, (draft:any)=>{
                const SEARCH_PRODUCT = draft.products.findIndex((product:any)=>product.product.id === action.payload)

                if(SEARCH_PRODUCT >= 0){
                  draft.products.splice(SEARCH_PRODUCT, 1)
                }
             })
          }
       }
})

export const { add, remove } = CART_PRODUCTS.actions

export default CART_PRODUCTS.reducer