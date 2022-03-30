import React from 'react';
import './CartItem.css'

const CartItem = ({ cartItme }) => {
    const {name,price,img,quantity,shipping}  = cartItme
    return (
        <div className='cart-item'>
            <div>
            <img className='img' src={img} alt="" />
           </div>
            <div>
                <h3 title={name}>
                    {name.length > 22 ?name.slice(0,23)+ '...' :name}
                </h3>
                <h5> Price : {price}</h5>
                <h5>Shipping : {shipping}</h5>
                <h5>Quantity : {quantity}</h5>
                
                
            </div>
           <button>Delete</button>
        </div>
    );
};

export default CartItem;