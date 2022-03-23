import React from 'react';
import './ShowCart.css'

const ShowCart = (props) => {
    const { name, seller, img, price, category, } = props.product
    return (
        
             <div className='cart'>
            <img src={img} alt="" />
            <div>
                <h4 className='name'>{name}</h4>
                <p> Price : ${price}</p>         
                <p>Macufacturer : {category}</p>
                <p>Seller : {seller}</p>
               
            </div>
            <button>Buy Now</button>
        </div>
      
    );
};

export default ShowCart;