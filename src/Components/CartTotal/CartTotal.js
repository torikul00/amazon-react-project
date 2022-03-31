import React from 'react';
import './CartTotal.css'

const CartTotal = (props) => {
    
    const { cart } = props
    console.log(props)

    let total = 0;
    let totalShping = 0
    let quantity = 0
    for (const product of cart) {
        quantity = quantity + product.quantity
        total = total + product.price * product.quantity
        totalShping = totalShping + product.shipping
        
    }
    let totalTax = parseInt(total * 10 /100)

    let grandTotal = total + totalShping + totalTax

    return (
        <div className='total-cart'>
            
            <p>Added Items : {quantity} </p>
            <p>Total Price :   $ {total} </p>
            <p>Shipping : $ {totalShping}</p>
            <p>Tax : ${totalTax}</p>
            <hr />
            <p>Total Bill : $ {grandTotal}</p>
            {props.children}

        </div>
    );
};




export {CartTotal};