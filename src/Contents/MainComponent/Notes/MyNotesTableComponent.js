import React from 'react';

import MyNotesComponent from './MyNotesComponent';

import InsertEmoticon from '@material-ui/icons/InsertEmoticon';
import DeleteForever from '@material-ui/icons/DeleteForever';
import Edit from '@material-ui/icons/Edit';
import Save from '@material-ui/icons/Save';
import Cancel from '@material-ui/icons/Cancel';


import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

let updateData;
class MyNotesTableComponent extends React.Component{
	
	constructor(props){
		super(props);
		this.state={
			id:"",
			initials:"",
			fullName:"",
			dob:"",
			showError:false,
			edit:1,
			data:[],
		};
	}

	handleChange = event => {
		this.setState({ fullName : event.target.value });
	}
	
	createUserName = (fName, id) => {
			let userName='';
			userName = fName.substr(0,3)+"00"+id;
			return userName;
	}
	
	render(){
		let notesTableBody;
		const {updateData} = this.props;
		if(updateData.length<1){
			notesTableBody =	
				<TableBody>
					<TableRow className="noDataMessage">
						<TableCell colSpan="5">
							<InsertEmoticon />
							Currently you have no data to show here. Please use the left side FORM to add data.
							<InsertEmoticon />
						</TableCell>
					</TableRow>
				</TableBody>
		}
		else{
			notesTableBody = 
				<TableBody>
					{
						Object.values(updateData).map( (row, i) => {
							return(
								<TableRow key={row.id} id={row.id}>
									<TableCell> {row.initials} </TableCell>
									<TableCell className="fNameTabelCell"> 
										<TextField
											id="fullName"
											name="fullName"
											value={this.state.fullName===""?row.fullName:this.state.fullName}
											disabled={(row.edit)?true:false}
											onChange={this.handleChange}
										/>
									</TableCell>
									<TableCell> {this.createUserName(row.fullName, row.id)} </TableCell>
									<TableCell> {row.dob} </TableCell>
									<TableCell>  
										{(row.edit!=0)&&(
											<div>
												<DeleteForever onClick={() => this.props.deleteRow(row.id)} />
												<Edit onClick={() => this.props.editRow(row.id)}/>
											</div>)
										}
										{(row.edit==0)&&(
											<div>
												<Save onClick={() => this.props.saveEditedRow(row.id)}/>
												<Cancel onClick={() => this.props.cancelEdit(row.id)}/>
												
											</div>)
										}
										
									</TableCell>
								</TableRow>
							)
								}
									)
					}

							</TableBody>

		}
		return(
			<div className="MyNotesTableComponent">
				<Table>
					<TableHead>
					  <TableRow>
						<TableCell> Initials </TableCell>
						<TableCell> Full Name </TableCell>
						<TableCell> UserName </TableCell>
						<TableCell> DoB </TableCell>
						<TableCell> Actions </TableCell>
					  </TableRow>
					</TableHead>
					
					{notesTableBody}
					
				</Table>

				
				
			</div>
		);
	}
	
	
	
}

export default MyNotesTableComponent;



