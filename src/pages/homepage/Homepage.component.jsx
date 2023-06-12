import React from "react";
import Directory from "../../components/directory.component/directory.component";
import "./Homepage.style.scss";


const Homepage = ({navigate})=>(

<div className="homepage">

<Directory navigate= {navigate}/>

</div>

);

export default Homepage;