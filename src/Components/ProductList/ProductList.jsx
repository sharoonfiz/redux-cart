
import { useSelector } from 'react-redux';
import products from '../../api/Producs.json'
import './ProductList.css'
import CartBtn from './CartButtons/CartBtns';
// step 11 is to import useSelectore from "react-redux" to get avilable that states eg-cartCount,, from store 




const ProductList = () => {

    // step 12 use the useSelector to get acess with the states inside initialState,,like below

    // const { cartItems } = useSelector((state) => state.cart)





    return (
        <section className='container' >

            <h2> Product List </h2>

            {products?.map((Product, key) => (
                console.log(key),
                <div className='card-item' key={key} >
                    <img src={Product.image} />
                    <h2>{Product.title} </h2>



                    <CartBtn {...{ Product }} />

                </div>

            ))}


        </section>
    );
};


export default ProductList;
