import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

import './MyMainContentComponent.css'


import MyNotesComponent from './Notes/MyNotesComponent';
import MyCalculatorComponent from './Calculator/MyCalculatorComponent';
import LogIn from '../MainComponent/LogIn/LogIn';
import MyHeadingComponent from '../HeadingComponent/myHeading';
import TTT from './TTT/TTTMain';
import Icon from '@material-ui/core/Icon';

class MyMainContentComponent extends React.Component{
	constructor(props){
		super(props);
		this.state={ 
			userName : props.location.state.data.employee.name,
			userRole : props.location.state.data.employee.role,
		};
	}

	renderElement(){
		if(this.state.userRole == 'PM'){
			 return(
			 <ul>
				<li>
				<Icon>chrome_reader_mode</Icon><Link to="/cal">POC</Link>
				</li>
				</ul>
			 )
		} else if(this.state.userRole == 'DM'){
			return(
			<ul>
				<li>
						<Icon>note_add</Icon><Link to="/notes">Resourcing</Link>
					  </li>
					  <li>
						<Icon>games</Icon><Link to="/ttt">Custom Template</Link>
					  </li>
			 </ul>
			)
	 }
 }


	render(){
		return(
			<BrowserRouter>
			  <div className="MyMainContentComponent">
				<div className="MyMainSideBarComponent">
				<div className="loggedInPerson">
					{this.state.userName} - 
					{this.state.userRole}
				</div>
				<ul>
				 <li>
				<Icon>home</Icon><Link to="/">Home</Link>
				</li>
				</ul>
				{ this.renderElement() }
				</div>

				<div className="MyMainTargetComponent">
					<Route path="/cal" component={MyCalculatorComponent} />
					<Route path="/notes" component={MyNotesComponent} />
					<Route path="/login" component={LogIn} />
					<Route path="/ttt" component={TTT} />
				</div>
			  </div>
			</BrowserRouter>

		);
	}
}

export default MyMainContentComponent;