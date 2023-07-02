import React from "react";

import './checkout-item.style.scss';


const CheckoutItem = ({cartItem:{name, imageUrl, price, quantity}})=>(

    <div className="checkout-item">
     <div className="image-container">
        <img alt ="item" src ={imageUrl}/>
     </div>
     <span className="name">
       {name}
     </span>
     <span className="quantity">
        {quantity}
        </span>
        <span className="price">
           {price}
        </span>
        <div className="remove-button">
        <i class="bi bi-trash"><p>&#10007;</p>
 </i>
        </div>
        

    </div>
);

export default CheckoutItem;