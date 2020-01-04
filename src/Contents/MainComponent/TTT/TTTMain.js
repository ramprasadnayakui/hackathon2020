import React from 'react';
import Button from '@material-ui/core/Button';
import './TTTMain.css'

class TTT extends React.Component{
	render(){
		return(
			<div className='TTT'>
				<Button className="btn" variant="contained" color="primary" >
						Single Player
				</Button>
				<br />
				<Button className="btnMultiple" variant="contained" color="primary">
					Multiple Players(Only 2)
				</Button>
			</div>
		);
	}
}

export default TTT;