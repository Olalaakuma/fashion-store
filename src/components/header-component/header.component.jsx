import React from "react";
import "./header.component.style.scss";
import { Link } from 'react-router-dom';
import { ReactComponent as Reactlogo } from "../../assets/4.3 crown.svg";


const Header = () =>(
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


            </div>
      

    

</div>

)

export default Header;