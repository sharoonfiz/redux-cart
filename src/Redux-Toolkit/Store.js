// step 7 is to import {configureStore} from reduxToolkit
import { configureStore } from "@reduxjs/toolkit";

import cartSlice from './Cart'
// step 8 is to import reducer where we exported from cart.js
//doubt about naming the reducer here



export const store = configureStore({
    reducer: {
        cart: cartSlice,
    },
});




