import React from 'react';

import './MyFooterComponent.css'

class MyFooterComponent extends React.Component{
	render(){
		return(
			<div className='MyFooterComponent'>®Copyright Content {(new Date().getFullYear())} </div>
		);
	}
}

export default MyFooterComponent;