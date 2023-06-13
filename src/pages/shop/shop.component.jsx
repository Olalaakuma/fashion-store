import React from "react";
import SHOP_DATA from "./shopData";

import CollectionPreview from "../../components/collection-preview-component/collection-preview.component";

class ShopPage extends React.Component{
constructor(props){
super(props);


this.state = {

    Collections: SHOP_DATA
      
    
    }
    

}
render(){
    const {Collections} = this.state;
return(
<div className="shop-page">

{

Collections.map(({id, ...otherCollections}) =>(
<CollectionPreview key ={id} {...otherCollections}/>

))
}
</div>

);


}
}
export default ShopPage;




