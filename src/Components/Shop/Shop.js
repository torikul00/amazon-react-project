import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import ShowCart from '../ShowingCart/ShowCart';
import { CartTotal } from '../CartTotal/CartTotal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Shop.css'
import { addToDb, getStoredItem } from '../../utilities/fakedb';

const Shop = () => {
    // load local storage data 
    
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    
    useEffect(() => {
        const storeData = getStoredItem()
        const addedCart = []
        for (const id in storeData) {
            const addedProducts = products.find(product => product.id === id)
            if (addedProducts) {
                const quantity = storeData[id]
                addedProducts.quantity = quantity
                addedCart.push(addedProducts)
            }
          
        }
        setCart(addedCart)
    }, [products])
 


    // handler
    const [cart, setCart] = useState([])
    
    const handleAddtoCart = (selectedProduct) => {
        
        let newCart = []
        const exists = cart.find(product => product.id === selectedProduct.id)
        if (!exists) {
            selectedProduct.quantity = 1
            newCart = [...cart , selectedProduct]
        }
        else {
            const rest = cart.filter(product => product.id !==selectedProduct.id)
            exists.quantity = exists.quantity + 1
            newCart = [...rest,exists]
        }
        setCart(newCart)
        addToDb(selectedProduct.id)
     
    }

    
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
                <h3>Order Summary </h3>
                <FontAwesomeIcon className='icon' icon={faShoppingCart} />
                <hr />                

           
                
                    <CartTotal cart = {cart}  />
                {
                    cart.map(product => <ShowCart product={product}/>)
                }
            </div>
        </div>
    );
};

export default Shop;