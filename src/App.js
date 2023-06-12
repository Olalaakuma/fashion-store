import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage.component';


import '/Users/mac/fashion-store/src/App.css';

const HatsPage =()=>(
<div>
<h1>HAT PAGE</h1>

</div>

);



function App() {
  return (<div>
<Routes>

  <Route  path='/' element = {<Homepage/>}/>
  <Route path ='/hats' element ={<HatsPage/>}/>
</Routes>



    
    
    </div>);
  
}

export default App;
