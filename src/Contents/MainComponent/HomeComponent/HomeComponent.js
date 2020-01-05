import React from 'react';

import './HomeComponent.css'

class HomeComponent extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			userRole: props.myProp.userRole,
		};
	}

	renderHomeElement() {
		if (this.state.userRole == 'PM') {
			return (
				<div className="pmView">
					show pm view
				</div>
			)
		} else if (this.state.userRole == 'DM') {
			return (
				<div className="dmView">
					show dm view
				</div>
			)
		}
	}

	render(){
		return(
			<div>
				{this.renderHomeElement()}
			</div>
		);
	}
}

export default HomeComponent;