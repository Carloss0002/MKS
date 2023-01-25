import { configureStore } from '@reduxjs/toolkit'
import Cart from './reducer/Cart'

export const store = configureStore({
    reducer:{
        Cart
    }
})