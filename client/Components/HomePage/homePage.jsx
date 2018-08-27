import React from 'react';
import {PackageList, Package, Greeting} from './homePageStyle.jsx';

class HomePage extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
	  return (
	  	<div id = 'homePage'>
	  		<Greeting> Welcome Gaurav, </Greeting>
	  		<h3> You are not added to any packages. Pick one below and bundle up!</h3>
		    <PackageList>
		    	<Package src= 'https://s3-us-west-1.amazonaws.com/hrsf98bundle/netflixlogo.0.0.png' />
		    	<Package src= 'https://s3-us-west-1.amazonaws.com/hrsf98bundle/chegLogo.png' />
		    	<Package src= 'https://s3-us-west-1.amazonaws.com/hrsf98bundle/amazon-prime2.ong.png' />
		    </PackageList>

	    </div>
	  );
		}
};

export default HomePage;