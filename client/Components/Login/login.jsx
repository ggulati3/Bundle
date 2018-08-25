import React from 'react';
import styled from 'styled-components';

import {SignIn, EmailInfo, Input} from '../../style.jsx';
import {ButtonContainer, Button, LogIn, SignUp} from './loginStyle.jsx';

class Login extends React.Component {
  constructor (props){
  	super(props)
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
	 			<LogIn>
		  			<Button id='btnLogin' className='btn btn-action'>Log In</Button>
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

