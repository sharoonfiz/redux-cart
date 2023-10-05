import { useMemo } from 'react'
import AfterCart from './AfterCart';
import BeforeCart from './BeforeCart';
import { useSelector } from 'react-redux';


const CartBtn = ({ Product }) => {

    const { cartItems } = useSelector((state) => state.cart)


    const CartCount = useMemo(() => {
        return cartItems.find((items) => items.id === Product.id)
    }, [cartItems])


    return (
        <div>

            {CartCount?.count > 0 ? (<AfterCart {...{ Product, CartCount }} />) : (<BeforeCart {...{ Product }} />)}



        </div>
    )
}

export default CartBtn;