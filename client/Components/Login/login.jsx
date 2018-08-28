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
  		logIn: false,
      signUp: false

  	}
  	this.clickOnLogIn = this.clickOnLogIn.bind(this);
  	this.getUserEmail = this.getUserEmail.bind(this);
    this.clickOnSignUp = this.clickOnSignUp.bind(this);
  }

  clickOnLogIn(){
  	this.setState({logIn: true})
  }

  getUserEmail(e){
  	this.setState({
  		username: e.target.value
  	})
  }

  clickOnSignUp(){
    this.setState({signUp: true})
  }

  render(){

	  if(this.state.logIn){
	  	return  <Redirect to={'/home'} />
	  }
    if(this.state.signUp){
      return  <Redirect to={'/signUp'} />
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
		  			<Button id='btnSignUp' className='btn btn-secondary' onClick={this.clickOnSignUp}>Sign Up</Button>
		  		</SignUp>
		  	</ButtonContainer>
	  	</SignIn>

	  )

  }
}

export default (Login);

