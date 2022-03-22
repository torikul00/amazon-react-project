import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const { name, seller, img, price, category, ratings } = props.product
    const {handleAddtoCart} = props
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h4> Price : ${price}</h4>
            <br />
            <p>Macufacturer : {category}</p>
            <p>Rating : {ratings}</p>
            <p>Seller : {seller}</p>
            <button onClick={()=>handleAddtoCart(props.product)} >Add To Cart
            <FontAwesomeIcon className='icon' icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;