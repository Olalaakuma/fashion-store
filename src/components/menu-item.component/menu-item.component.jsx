import React from "react";
import "/Users/mac/fashion-store/src/components/menu-item.component/menu-item.style.scss";
import {  useNavigate,  } from "react-router";
export const withRouter = (Component) => {
	const Wrapper = (props) => {
		const navigate  = useNavigate();
		return <Component navigate={navigate} {...props} />;
	};
	return Wrapper;
};



const MenuItem = ({title, imageUrl, size, navigate,  linkUrl})=>(

<div className={` menu-item ${size}`} onClick= {()=> navigate( `${ linkUrl}`)}>
        
<div className="background-image" style ={{backgroundImage: `url(${imageUrl})`}} />
        <div className="content">

 <h1 className=" title">{title.toUpperCase()}</h1>
  <p className="subtitle">SHOP NOW</p>

        </div>



    </div>
);

export default withRouter(MenuItem)