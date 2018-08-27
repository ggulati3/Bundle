import React from 'react';
import {PackageList, Package, Greeting, NoPackageAlert} from './homePageStyle.jsx';
import {  Route, Link, Redirect, Switch, withRouter} from 'react-router-dom';
class HomePage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			'packageChosen': false
		}

		this.clickOnOption = this.clickOnOption.bind(this);
	}

	clickOnOption() {
		this.setState({'packageChosen': true})
	}


	render() {
		if(this.state.packageChosen){
		 return  <Redirect to={'/netflix'} />
		}
	  return (
	  	<div id = 'homePage'>
	  		<Greeting> Welcome Gaurav, </Greeting>
	  		<NoPackageAlert> You are not added to any packages. Pick one below and bundle up!</NoPackageAlert>
		    <PackageList>
		    	<Package src= 'https://s3-us-west-1.amazonaws.com/hrsf98bundle/netflixlogo.0.0.png' onClick={this.clickOnOption}/>
		    	<Package src= 'https://s3-us-west-1.amazonaws.com/hrsf98bundle/chegLogo.png' />
		    	<Package src= 'https://s3-us-west-1.amazonaws.com/hrsf98bundle/amazon-prime2.ong.png' />
		    </PackageList>

	    </div>
	  );
		}
};

export default HomePage;