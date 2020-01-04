import React from 'react';

import './MyDateQuoteComponent.css'

class MyDateQuoteComponent extends React.Component{
	constructor(){
		super();
		var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
		var today = new Date().toLocaleDateString("en-US",options);
		this.state = {
			date:today
		}
	}
	render(){
		return(
			<div className='MyDateQuoteComponent'>
				<div className='QuoteComponent'>
					A Good Programmer looks both ways before crossing a One-Way street. - Sony
				</div>
				<div className='DateComponent'>
					<div>{this.state.date}</div>
				</div>
			</div>
		);
	}
}

export default MyDateQuoteComponent;