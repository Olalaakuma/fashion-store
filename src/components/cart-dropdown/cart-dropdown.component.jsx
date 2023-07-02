import React from "react";
import {connect} from 'react-redux';
import CustomButton 
from "../button-component/button.component";
import { createStructuredSelector } from "reselect";
import CartItem from "../cart-item/cart-item.component";

import { selectCartItems } from "../../redux/cart/cart.selector";
import './cart-dropdown.styles.scss';
import {toggleCartHidden} from '../../redux/cart/cart.action';

import {  useNavigate,  } from "react-router";


export const withRouter = (Component) => {
	const Wrapper = (props) => {
		const navigate  = useNavigate();
		return <Component navigate={navigate} {...props} />;
	};
	return Wrapper;
};



const CartDropDown = ({cartItems, navigate,dispatch})=>(
    <div className="cart-dropdown">
        <div className="cart-items">
{
 cartItems.length?
    cartItems.map( cartItem =>(
       <CartItem key ={cartItem.id} item ={cartItem}/> 
    )):
    <span className="empty-message">Empty cart items</span>

}

        </div>
        <CustomButton onClick ={()=> {navigate( `/checkout`);
     dispatch(toggleCartHidden());
    }}>
       GO TO CHECKOUT
        </CustomButton>
    </div>
);


const mapStateToProps =createStructuredSelector({
 cartItems:selectCartItems

});

export default withRouter(connect(mapStateToProps) (CartDropDown));