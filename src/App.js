import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header-component/header.component.jsx';
import '/Users/mac/fashion-store/src/App.css';





function App() {
  return (<div>

    <Header/>
<Routes>

  <Route  path='/' element = {<Homepage/>}/>
  <Route path ='/shop' element ={<ShopPage/>}/>
</Routes>



    
    
    </div>);
  
}

export default App;
