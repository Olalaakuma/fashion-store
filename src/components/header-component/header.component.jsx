import React from "react";
import "./header.component.style.scss";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import CartIcon from "../cart-icon/cart-icon.component";
import { auth } from "../../firebase-utilities/firebase.util";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

import { ReactComponent as Reactlogo } from "../../assets/4.3 crown.svg";


const Header = ({currentUser, hidden}) =>(
<div className="header">
    
        
            <Link className="logo-container" to="/">
        <Reactlogo className = 'logo'/>
            </Link>

            <div className="options">

            <Link className="option" to ="/shop">
            SHOP
            </Link>  

            <Link className="option" to ="/CONTACT">
            CONTACT
            </Link> 
           {

           currentUser? <div className="option" onClick ={()=> {auth.signOut()}}>SIGN OUT</div> :
           
           <Link className="option" to ='/signin'>SIGN IN
           </Link>
           }


       <CartIcon/>
            </div>
      

   {
    hidden? null:
    <CartDropDown/>
    }

</div>

);

const mapStateToProps = ({user:{currentUser}, cart:{hidden}})=> ({
currentUser,
hidden


})

export default connect(mapStateToProps)(Header);