import React from 'react';
import styled from 'styled-components';
import Navbar from './Components/Navbar/navbar.jsx'
import Login from './Components/Login/login.jsx'
import { MainPage } from './style.jsx'

class App extends React.Component {
  constructor(props){
  	super(props)
  }
  render() {
    return (
    	<MainPage>
    		<Navbar></Navbar>
    		<Login></Login>
    	</MainPage>
    )
  }
}


export default App;