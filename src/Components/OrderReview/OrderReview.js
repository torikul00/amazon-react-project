import React from 'react';
import CartItem from '../CartItem/CartItem';
import { CartTotal } from '../CartTotal/CartTotal';
import UseProduct from '../Hooks/UseProduct';
import useCart from '../useCart/useCart';
import './OrderReview.css'

const OrderReview = () => {
    const [products, setProducts] = UseProduct()
    const [cart, setCart] = useCart(products)
  

    return (
        <div className='shopping-container'>
            <div className="cart-item-container">
            <div >
                {
                    cart.map(cartItem => <CartItem key={cartItem.id} cartItme = {cartItem} />)
                }
            </div>
            </div>

            <div className='cart-container' >
            
            <CartTotal cart={cart} />

        </div>
        </div>
        
    );
};

export default OrderReview;