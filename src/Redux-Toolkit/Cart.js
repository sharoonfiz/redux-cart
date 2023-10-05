// step 1 to import Createslice from reduxtoolkite
import { createSlice } from "@reduxjs/toolkit";


// step 3 to create intialState to declare inside createSlice
const initialState = {
    cartItems: []
}

// step 2 is to create slice which we import from redux to set intialState, reducers,actions and update state

const cartSlice = createSlice({
    name: "cart",
    initialState,

    // step 4 to set actions for state update
    reducers: {
        addToCart: (state, action) => {

            const exist = state.cartItems.some((items) => items.id === action.payload.id);

            {
                exist ? state.cartItems.map((items) => items.id === action.payload.id ? items.count = 1 : items.count)

                    :

                    state.cartItems.push({
                        ...action.payload,
                        count: 1,
                    });
            }
        },


        increment: (state, action) => {

            state.cartItems.map((items) => items.id === action.payload ? items.count += 1 : items.count)
        },


        decrement: (state, action) => {

            state.cartItems.map((items) => items.id === action.payload ? items.count -= 1 : items.count)
        }
    }
})






// step 5 is to export actions which is the above fntions eg : -(addToCart) above ) from reducers inside  cartSlice where we declared   to use somewhere

export const { addToCart, increment, decrement } = cartSlice.actions

// step 6 is to export reducers to import inside the store in redux,
// where from store it can be pass to the entire components with the help of provider


export default cartSlice.reducer;


// now step 7 is to create the store for reduxToolKit in anotherPage

