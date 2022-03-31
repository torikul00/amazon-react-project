import React from 'react';
import { Link } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import CartItem from '../CartItem/CartItem';
import { CartTotal } from '../CartTotal/CartTotal';
import UseProduct from '../Hooks/UseProduct';
import useCart from '../useCart/useCart';
import './OrderReview.css'

const OrderReview = () => {
    const [products, setProducts] = UseProduct()
    const [cart, setCart] = useCart(products)

    const deleteFromCart = (cartItem) => {
        const rest= cart.filter(product => product.id !== cartItem.id)
        setCart(rest)
        removeFromDb(cartItem.id)
    }
  

    return (
        <div className='shopping-container'>
            <div className="cart-item-container">
            <div >
                {
                        cart.map(cartItem => <CartItem key={cartItem.id} cartItme={cartItem}
                        deleteFromCart = {deleteFromCart}
                        />)
                }
            </div>
            </div>

            <div className='cart-container' >
            
                <CartTotal cart={cart}>
                    <Link to={'/manageInventory'}>
                        <button className='order-procced'>Order Procced</button>
                    </Link>
            </CartTotal>

        </div>
        </div>
        
    );
};

export default OrderReview;