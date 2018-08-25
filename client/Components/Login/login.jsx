import React from 'react';
import styled from 'styled-components';

import {SignIn, EmailInfo, Input} from '../../style.jsx';
import {ButtonContainer, Button, LogIn, SignUp} from './loginStyle.jsx';

class Login extends React.Component {
  constructor (props){
  	super(props)
  	this.state = {
  		username: '',
  		password: ''
  	}
  	this.clickOnLogIn = this.clickOnLogIn.bind(this);
  }

  clickOnLogIn(){
  	
  }

  render(){
	  return (
	  	<SignIn>
	  		<h1> Bundle Sign In </h1>
	  		<EmailInfo>Email or Phone</EmailInfo>
	  		<Input id ='txtEmail' type='email' placeholder='Email' />
	  		<EmailInfo>Password</EmailInfo>
	  		<Input id ='txtPassword' type='password' placeholder='Password' />
	  		<ButtonContainer>
	 			<LogIn >
		  			<Button id='btnLogin' className='btn btn-action' onClick = {this.clickOnLogIn} >Log In</Button>
		  		</LogIn>
		  		<SignUp>
		  			<Button id='btnSignUp' className='btn btn-secondary'>Sign Up </Button>
		  		</SignUp>
		  	</ButtonContainer>
	  	</SignIn>
	  )

  }
}

export default Login;

