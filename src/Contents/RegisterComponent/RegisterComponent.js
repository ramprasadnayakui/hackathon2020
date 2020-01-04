import React from 'react';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { withRouter, Router } from 'react-router-dom';
import CardHeader from '@material-ui/core/CardHeader';
import './RegisterComponent.css'

class RegisterComponent extends React.Component {

    constructor(props) {
        super(props);
        this.register = this.register.bind(this);
    }

    register() {
        this.props.history.push('/cal');
    }


    render() {
        return (
            <div className="registerCard">
                <Card>
                    <CardHeader title="Log In" />
                    <CardContent>
                        <TextField
                            id="registerName"
                            label="Username"
                            margin="dense"
                        />
                        <TextField
                            id="registerUsername"
                            label="Username"
                            margin="dense"
                        />
                        <TextField
                            id="registerPassword"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            margin="normal"
                        />
                    </CardContent>
                    <CardActions className="buttonSection">
                        <Button variant="contained" color="primary" onClick={this.register}>Register</Button>
                    </CardActions>
                </Card>

            </div>
        );
    }
}

export default withRouter(RegisterComponent);