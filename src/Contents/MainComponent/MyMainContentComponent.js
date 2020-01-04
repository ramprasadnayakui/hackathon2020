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
	render(){
		return(
			<BrowserRouter>
			  <div className="MyMainContentComponent">
				<div className="MyMainSideBarComponent">
					<ul>
					  <li>
						<Icon>home</Icon><Link to="/">Home</Link>
					  </li>
					  <li>
						<Icon>chrome_reader_mode</Icon><Link to="/cal">Calculator(Sri Ramana)</Link>
					  </li>
					  <li>
						<Icon>note_add</Icon><Link to="/notes">Add Details(Ram)</Link>
					  </li>
					  <li>
						<Icon>games</Icon><Link to="/ttt">Tic Tac Toe Game (Harsha)</Link>
					  </li>
					</ul>
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