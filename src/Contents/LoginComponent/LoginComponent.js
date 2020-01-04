import React from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import {actions} from '../../actions/actions';
import {connect} from 'react-redux';
import './LoginComponent.css'

class LoginComponent extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			isLoginSubmitted:false,
			username: '',
            password: '',
		}
		this.login = this.login.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

    login(){
        /*this.setState({
			isLoginSubmitted : true
		}, function(){
			//After performing validations pass the username & password in the below method to perform the actual behaviour
			this.props.dispatch(actions.loginUser(this.state.username,this.state.password));
		});*/

		const user = {empId : this.state.username}
	  
		  axios.post(`http://localhost:8080/hackathon/login`, user )
			.then(res => {
			  console.log(res);
			  console.log(res.data);
			})
	}

	componentDidUpdate(state,props){
		console.log(props);
		if(props.isLoginSubmitted){
			this.props.history.push("/main");
		}
	}
	
	handleChange(e){
		const { name, value } = e.target;
        this.setState({ [name]: value });
	}
	
	render() {
		return (
			// The below code displays the Login form with a card style layout of Material UI.
			<div className="loginCard">
				<Card>
				<CardHeader title="Log In"/>
					<CardContent>
						<TextField
							id="loginUsername"
							label="Username"
							margin="dense"
							value={this.state.username}
                            onChange={this.handleChange}
                            name="username"
						/>
						<TextField
							id="loginPassword"
							label="Password"
                            type="password"
                            name="password"
							autoComplete="current-password"
							margin="normal"
							value={this.state.password}
							onChange={this.handleChange}
						/>
					</CardContent>
					<CardActions className="buttonSection">
					<Button variant="contained" color="primary" onClick={this.login}>LogIn</Button>
					</CardActions>
				</Card>
			</div>
		);
	}
}

function mapStateToProps(state) {
    return {
        isLoginSubmitted: state.loginUser.isLoggedIn
    };
}

export default connect(mapStateToProps)(LoginComponent);