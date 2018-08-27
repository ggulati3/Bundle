import React from 'react';

import styled from 'styled-components';
import {  Redirect } from 'react-router-dom';

import {SignIn, EmailInfo, Input, Steven} from '../../style.jsx';
import {ButtonContainer, Button, LogIn, SignUp} from './loginStyle.jsx';

import HomePage from '../HomePage/homePage.jsx';

class Login extends React.Component {
  constructor (props){
  	super(props)
  	this.state = {
  		username: '',
  		password: '',
  		redirect: false
  	}
  	this.clickOnLogIn = this.clickOnLogIn.bind(this);
  	this.getUserEmail = this.getUserEmail.bind(this);
  }

  clickOnLogIn(){
  	this.setState({redirect: true})
  }

  getUserEmail(e){
  	this.setState({
  		username: e.target.value
  	})
  }

  render(){

  	  if(this.state.redirect){
  	  	return  <Redirect to={this.state.username} />
  	  }
	  return (
	  	<SignIn>
	  		<h1> Bundle Sign In </h1>
	  		<EmailInfo>Username</EmailInfo>
	  		<Input id ='txtEmail' type='email' placeholder='Username' onChange = { e => this.getUserEmail(e) }/>
	  		<EmailInfo>Password</EmailInfo>
	  		<Input id ='txtPassword' type='password' placeholder='Password' />
	  		<ButtonContainer>
	 			<LogIn >
		  			<Button id='btnLogin' className='btn btn-action' onClick = {this.clickOnLogIn}>Log In</Button>
		  		</LogIn>

		  		<SignUp>
		  			<Button id='btnSignUp' className='btn btn-secondary'>Sign Up</Button>
		  		</SignUp>
		  	</ButtonContainer>
	  	</SignIn>

	  )

  }
}

export default (Login);

