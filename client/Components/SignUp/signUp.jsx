import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import {  Redirect } from 'react-router-dom';

import { SignUpBox, Confirm, Form} from './signUpStyles.jsx';
import {ButtonContainer, Button, LogIn, Entry} from './signUpStyles.jsx';

class SignUp extends React.Component {
  constructor(props){
  	super(props)

  	this.state = {
  		name: 'Enter Name',
  		email: 'Enter Email',
  		goHome: false
  	}

  	this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
  	this.goHome = this.goHome.bind(this);
  }

  handleChangeName(){
	this.setState({ name: event.target.value });
  }

  handleChangeEmail(){
  this.setState({ email: event.target.value });
  }

  goHome(){
  	this.setState({goHome: true})
  }

  render(){
  	if(this.state.goHome){
  		return  <Redirect to={'/home'} />
  	}

  	return(
      <SignUpBox>
      <h1>Create Bundle Account</h1>
      <Entry>Username</Entry>
      <Input id ='txtEmail' type='email' placeholder='Username' />
      <Entry>First Name</Entry>
      <Input id ='txtEmail' type='email' placeholder='Username' />
      <Entry>Last Name</Entry>
      <Input id ='txtEmail' type='email' placeholder='Username' />
      <Entry>Password</Entry>
      <Input id ='txtPassword' type='password' placeholder='Password' />
      <Entry>Confirm Password</Entry>
      <Input id ='txtPassword' type='password' placeholder='Password' />

	       	<Confirm onClick={this.goHome}>Submit</Confirm>
  		</SignUpBox>

  	)
  }
}

export default SignUp;