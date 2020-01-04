import React from 'react';

import './MyNotesComponent.css'

import MyTextField from '../CustomComponent/MyTextField';
import MyNotesTableComponent from './MyNotesTableComponent';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import LabelImportant from '@material-ui/icons/LabelImportant';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'

let dataArray =	[
					{id: 1, initials: "Mr", fullName: "Rama", dob: "2018-12-13", edit: 1},
					{id: 2, initials: "Mr", fullName: "Sri", dob: "2018-12-13", edit: 1},
					{id: 3, initials: "Mr", fullName: "Harsha", dob: "2018-12-13", edit: 1},
					{id: 4, initials: "Mr", fullName: "Prince", dob: "2018-12-13", edit: 1}
				];
let pid = dataArray[dataArray.length-1].id;
class MyNotesComponent extends React.Component{
	
	constructor(props){
		super(props);
		this.state={
			id:"",
			initials:"",
			fullName:"",
			dob:"",
			showError:false,
			edit:1,
			data:dataArray,
		};
	}
		
	handleChange = event => {
		this.setState({ [event.target.name] : event.target.value });
	  };

	  
	AddDataHandler = e => {
		
		const {initials, fullName, dob, edit, id} = this.state;
		if(initials!=='' && fullName!=='' && dob!==''){
			pid += 1;
			let obj={id:pid,initials:initials,fullName:fullName,dob:dob,edit:edit};
			dataArray.push(obj);
			this.setState({initials:'',fullName:'',dob:'',data:dataArray,showError:false});
		}
		else{
			this.setState({showError:true});
		}
	}
	
	deleteCurrentRow = id => {
		confirmAlert({
			title: 'Confirm to submit',
			message: 'Once deleted the specific data will no more be available. Do you still want to delete?',
			buttons: [
			  {
				label: 'Yes',
				onClick: () => {
					let updatedDataAfterDelete=[];
					updatedDataAfterDelete = dataArray.filter(item => {
							return item.id != id;
					});
					dataArray = updatedDataAfterDelete;
					this.setState({data:updatedDataAfterDelete});
				}
			  },
			  {
				label: 'No',
				onClick: () => {
					dataArray[id-1].edit=1;
					this.setState({data:dataArray});
				}
			  }
			]
		  })
	}
  
	editCurrentRow = id => {
		dataArray[id-1].edit=0;
		this.setState({data:dataArray});
	}

	cancelRowEdit = id => {
		dataArray[id-1].edit=1;
		this.setState({data:dataArray});
	}

	saveEditedRow = di => {
		alert("I know you are checking if it is working or not!! wait for it, I am still coding..hehe");
	}
  
	render(){
		return(
			<div className='MyNotesComponent'>
				<div className="MyNotesAddComponent">
					<form autoComplete="off" noValidate>
						<FormControl className="formControl">

							<InputLabel>Initials</InputLabel>
							<Select
								value={this.state.initials}
								onChange={this.handleChange}
								name='initials'
								error={this.state.showError}
							>
								<MenuItem value="Mr">Mr</MenuItem>
								<MenuItem value="Mrs">Mrs</MenuItem>
								<MenuItem value="Miss">Miss</MenuItem>
							</Select>
							
							<br />
							
							<TextField 
								id="fullName"
								label="Full Name"
								name="fullName"
								value={this.state.fullName}
								error={this.state.showError}
								onChange={(event) => this.handleChange(event)}
							/>
							
							<br />
							
							<TextField
								id="date"
								label="Date of Birth"
								type="date"
								name="dob"
								className="MyDatePicker"
								error={this.state.showError}
								value={this.state.dob}
								onChange={(event) => this.handleChange(event)}
								InputLabelProps={{
								  shrink: true,
								}}
							/>
							
							<div className="AddIcon">
								<LabelImportant 
									onClick={(event) => this.AddDataHandler(event)}
								/>
							</div>
							
						</FormControl>
					</form>
				</div>
				
				<MyNotesTableComponent 
									updateData={this.state.data}
									deleteRow={this.deleteCurrentRow}
									editRow={this.editCurrentRow}
									cancelEdit={this.cancelRowEdit}
									saveEditedRow={this.saveEditedRow}
				/>
			
			</div>
		);
	}
}

export default MyNotesComponent;