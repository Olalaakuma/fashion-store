import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header-component/header.component.jsx';
import SignInAndSignUp from './pages/signin-and-signup/signin-and-signup';
import { auth, CreateUserProfileDocument } from './firebase-utilities/firebase.util';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.action';
import '/Users/mac/fashion-store/src/App.css';





class App extends React.Component {
 
  unsubscribeFromAuth = null;

componentDidMount(){
  const{setCurrentUser}= this.props;

this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth =>{
  if(userAuth){
  const userRef = await CreateUserProfileDocument(userAuth);

  userRef.onSnapshot(snapShot =>{
setCurrentUser({
id: snapShot.id,
...snapShot.data()

});
});

  
}else{

  setCurrentUser( userAuth);
}

});

};

componentWillUnmount(){
this.unsubscribeFromAuth();

}
  

  render(){
  return (<div>

    <Header />
<Routes>

  <Route  path='/' element = {<Homepage/>}/>
  <Route path ='/shop' element ={<ShopPage/>}/>
  <Route path ='/signin' element ={<SignInAndSignUp/>}/>
</Routes>



    
    
    </div>);
  }
}
const mapDispatchToProps = dispatch =>({
setCurrentUser: user=> dispatch(setCurrentUser(user))

});

export default connect(null, mapDispatchToProps)(App);
