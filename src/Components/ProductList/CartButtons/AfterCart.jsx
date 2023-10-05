import React from 'react'
import { useDispatch } from 'react-redux';
import { decrement, increment } from '../../../Redux-Toolkit/Cart';
import '../CartButtons/CartButton.css';



const AfterCart = ({ Product, CartCount }) => {

    const dispatch = useDispatch()

    return (
        <div className='after-cart' >

            <button className='cart-counter-btn' onClick={() => dispatch(decrement(Product.id))} > -  </button>

            <p className='cart-count' > {CartCount?.count} </p>


            <button className='cart-counter-btn' onClick={() => dispatch(increment(Product.id))} > + </button>
        </div>
    )
}

export default AfterCart