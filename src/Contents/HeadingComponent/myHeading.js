import React from 'react';

import "./myHeading.css";

import { BrowserRouter, Route, Link } from "react-router-dom";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';


class MyHeadingComponent extends React.Component {
	constructor() {
		super();
		this.state = {
			anchorEl: null,
		};
	}


	handleClick = event => {
		this.setState({ anchorEl: event.currentTarget });
	};

	handleClose = () => {
		this.setState({ anchorEl: null });
	};

	render() {
		const styles = {
			avatar: {
				margin: 10,
			},
			bigAvatar: {
				margin: 10,
				width: 60,
				height: 60,
			},
		};
		return (
			<div className="myHeadingClass">
				<span>Automated Reporting Tool</span>
			</div>
		);
	}
}

export default MyHeadingComponent;