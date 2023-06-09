import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../button-component/button.component";
import { signInWithGoogle } from "../../firebase-utilities/firebase.util";
import './signin.component.style.scss';


class SignIn extends React.Component{
constructor(props){

    super(props);

    this.state ={
    email: '',
    password:''

    }
}
handleSubmit = event=>{
    
    event.preventDefault();
    this.setState({email:'', password:''})
}
    
handleChange = event=>{

  const {name, value}= event.target;
  
  this.setState({[name]:value})
}


render(){

    return(
 <div className="sign-in">
<h2>Already have an account?</h2>
<span>
    signin with your  email and password
</span>
<form onSubmit = {this.handleSubmit}>
<FormInput name ='email' type ='email' value={this.state.email} handleChange={this.handleChange} label = 'email' required/>

<FormInput name ='password' type ='password' value={this.state.password} 
handleChange={this.handleChange} label = 'password'
required/>

<div className="buttons">
<CustomButton type= 'submit' > Sign in </CustomButton>
<CustomButton onClick = {signInWithGoogle} isGoogleSignIn> 
Signin with Google
 </CustomButton>

</div>


</form>


 </div>

    );


}


}

export default SignIn;