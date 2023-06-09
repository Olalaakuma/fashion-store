import React from "react";
import CollectionItem from "../collection-Item/collection-item";
import "./collection-preview.component.scss";

const CollectionPreview = ({title, items})=>
(
<div className="collection-preview">
<h1 className="title">{title.toUpperCase()}</h1>
<div className="preview">

    {
    items.filter((item, idc)=> idc < 4).map(item =>
        (<CollectionItem key ={item.id} item ={item}/>))
        }
          

</div>



</div>

);

export default CollectionPreview;