import React from "react";
import {connect} from  'react-redux';
import { cleartItemFromCart, addItem, removeItem } from "../../redux/cart/cart.action";

import './checkout-item.style.scss';
import { removeItemFromCart} from "../../redux/cart/cart.utils";


const CheckoutItem = ({cartItem, clearItem, addItem, removeItem})=>{
 const {name, imageUrl, price, quantity}= cartItem;
   return( <div className="checkout-item">
     <div className="image-container">
        <img alt ="item" src ={imageUrl}/>
     </div>
     <span className="name">
       {name}
     </span>
     <span className="quantity">
     <div className="arrow" onClick={()=>removeItem(cartItem)}>&#10134;</div> 
     <span className="value">{quantity}</span> 
     <div className="arrow" onClick={()=>addItem(cartItem)}>&#10133;</div>
        </span>
        <span className="price">
           {price}
        </span>
        <div className="remove-button" onClick ={()=>clearItem(cartItem)}>
       ␥
 
        </div>
        

    </div>)
};

const mapDispatchToProps = dispatch=>({


   clearItem: item=> dispatch(cleartItemFromCart(item)),
   addItem: item =>dispatch(addItem(item)),
   removeItem: item=> dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);