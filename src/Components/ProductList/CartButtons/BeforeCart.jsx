import React from 'react'
import '../CartButtons/CartButton.css'
import { addToCart } from '../../../Redux-Toolkit/Cart'
import { useDispatch } from 'react-redux'


// step 12 -- is the final here bcoz we have created actions fntion inside reducers in cart.js.. so we have to get those action here
// we will import the action funtions here bcoz we imported those action in cart.js from reducer
// step 13 is to import useDispatch from redux to pass those actions we created inside reducers,and pass the action inside dispatch
// so when onclick dispatch will take the action fucntion from here to there and get activated so..the fucntion run like realtime 


const BeforeCart = ({ Product }) => {

    const dispatch = useDispatch()


    return (
        <div className='before-cart' onClick={() => dispatch(addToCart(Product))} >
            <button className='add-cart-btn' >Add To Cart</button>
        </div>
    )
}

export default BeforeCart