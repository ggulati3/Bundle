import React from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import axios from 'axios';
import { Welcome, NetflixPack, PackageInfo, List, GroupButton } from './NetflixPackageStyle.jsx';

import BundleGroup from './bundleGroup.jsx';

class NetflixPackage extends React.Component {
	constructor(props){
		super(props)
		this.bundleButton = 'Click to Find Group'
		this.state = {
			data: false
		}

		this.getGroup = this.getGroup.bind(this);
	}
	getGroup(){
		axios.get('/package/netflix')
	      .then(res => {
	      	this.bundleButton = 'Group Found!';
	      	console.log(res.data)
	        this.setState({'data': res.data})
	      })
  	}
	render(){

		return(
			<NetflixPack>
			  <Welcome>Welcome to the Netflix Package</Welcome>
			  <PackageInfo>
			  	<List>
			  		<ul>Package Name: Netflix</ul>
			  		<ul>Number of Users: 3 Members</ul>
			  		<ul>Price: $5.00 per month</ul>
			  		<ul>Savings: $10 per month</ul>
			  		<ul>Billing Date: 1st of Every Month</ul>
			  	</List>
			  </PackageInfo>

			  <GroupButton onClick ={ this.getGroup }>{this.bundleButton}</GroupButton>
			  <BundleGroup data={this.state.data}></BundleGroup>
			</NetflixPack>
		);
	}
}

export default NetflixPackage;