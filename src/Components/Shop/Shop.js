import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import ShowCart from '../ShowingCart/ShowCart';

import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([])
    

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    // handler
    const [cart , setCart] = useState([])
    const handleAddtoCart = (products) => {
        const newCart = [...cart, products];
        setCart(newCart)
        setCartMsg('')
        
     
    }


    console.log(cart)
    const [cartMsg , setCartMsg] = useState('Your Cart is Emty')
    // returning
    return (
        <div className='shopping-container'>
            <div className="product-container">
            {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddtoCart = {handleAddtoCart}
                    />)
            }
            </div>       

            <div className="cart-container">
                <h2>Order Summary </h2><hr />
                <h3 style={{textAlign:'center'}}>{ cartMsg}</h3>
                {
                    cart.map(product => <ShowCart product={product} />)
                }
            </div>
        </div>
    );
};

export default Shop;