import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header-component/header.component.jsx';
import SignInAndSignUp from './pages/signin-and-signup/signin-and-signup';
import { auth, CreateUserProfileDocument } from './firebase-utilities/firebase.util';
import '/Users/mac/fashion-store/src/App.css';





class App extends React.Component {
  constructor(){
super();

this.state = {

  currentUser: null
};
  }
  unsubscribeFromAuth = null;

componentDidMount(){
this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth =>{
  if(userAuth){
  const userRef = await CreateUserProfileDocument(userAuth);

  userRef.onSnapshot(snapShot =>{
this.setState({currentUser:{
id: snapShot.id,
...snapShot.data()

}})

  });
}else{

  this.setState({currentUser: userAuth});
}

});

};

componentWillUnmount(){
this.unsubscribeFromAuth();

}
  

  render(){
  return (<div>

    <Header currentUser = {this.state.currentUser}/>
<Routes>

  <Route  path='/' element = {<Homepage/>}/>
  <Route path ='/shop' element ={<ShopPage/>}/>
  <Route path ='/signin' element ={<SignInAndSignUp/>}/>
</Routes>



    
    
    </div>);
  }
}

export default App;
