import React from 'react';
import styled from 'styled-components';
import Navbar from './Components/Navbar/navbar.jsx';
import Login from './Components/Login/login.jsx';
import { MainPage } from './style.jsx';
import HomePage from './Components/HomePage/homePage.jsx'
import {  BrowserRouter as Router, Route, Link, Redirect, Switch, withRouter} from 'react-router-dom';


class App extends React.Component {
  constructor(props){
  	super(props)
    this.state = {
      username: ''
    }
  }
  render() {
    return (
      <Router>
      	<MainPage>
      		<Navbar></Navbar>
      		<Login></Login>
          <Route path="/home" component={HomePage} />
      	</MainPage>
      </Router>
    )
  }
}


export default App;