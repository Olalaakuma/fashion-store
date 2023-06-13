import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage.component';
import ShopPage from './pages/shop/shop.component';

import '/Users/mac/fashion-store/src/App.css';





function App() {
  return (<div>
<Routes>

  <Route  path='/' element = {<Homepage/>}/>
  <Route path ='/shop' element ={<ShopPage/>}/>
</Routes>



    
    
    </div>);
  
}

export default App;
