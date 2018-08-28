import React from 'react';
import styled from 'styled-components';

import {Div} from './bundleGroupStyle.jsx';

function BundleGroup(props) {
  if(props.data !== false){
  	return (
  		<Div>
  			<h1>Group Member: David Jue</h1>
  			<h2>Username: davacados</h2>
  			<h2>Primary Card Holder</h2>

  			<h1>Group Member: Trevor Holt</h1>
  			<h2>Username: drummer132</h2>
  			<h2>Non Primary Card Holder</h2>

  			<h1>Group Member: Gaurav Gulati</h1>
  			<h2>Username: ggulati3</h2>
  			<h2>Non Primary Card Holder</h2>
  		</Div>
  	);
  } else {
  	return <p></p>
  }
}

export default BundleGroup;