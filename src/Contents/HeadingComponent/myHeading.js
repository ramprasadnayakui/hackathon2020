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
				<span>HULU - LULU</span>
				<span className="myHeadingButtonClass">
					<Button
					aria-owns={this.state.anchorEl ? 'simple-menu' : undefined}
					aria-haspopup="true"
					onClick={this.handleClick}
					>
						Menu
        			</Button>
					<Menu
						id="simple-menu"
						anchorEl={this.state.anchorEl}
						open={Boolean(this.state.anchorEl)}
						onClose={this.handleClose}
					>
						<MenuItem onClick={this.handleClose}>Sign Up</MenuItem>
						<MenuItem>
							<BrowserRouter>
								<Link to="/login">Log In</Link>
							</BrowserRouter>
						</MenuItem>
						<MenuItem onClick={this.handleClose}>Any Other Items</MenuItem>
					</Menu>
				</span>
			</div>
		);
	}
}

export default MyHeadingComponent;