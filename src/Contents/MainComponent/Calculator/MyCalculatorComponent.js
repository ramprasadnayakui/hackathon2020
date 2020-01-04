import React from 'react';

import './MyCalculatorComponent.css'

class MyCalculatorComponent extends React.Component{
	render(){
		return(
			<div className='MyCalculatorComponent'>
			<div className="calculatorContainer">
				<div className="calculatorResultDisplay"></div>
				<div className="calculatorButtonsContainer">
				<div className="row1">
					<div className="operation operator" id="operation_+"> + </div>
					<div className="operation operator" id="operation_-"> - </div>
				 	<div className="operation operator" id="operation_*"> * </div>
					<div className="operation operator" id="operation_/"> / </div>
				</div>
				<div className="row2"> 
					<div className="operation operand" id="number_7"> 7 </div>
					<div className="operation operand" id="number_8"> 8 </div>
				 	<div className="operation operand" id="number_9"> 9 </div>
					<div className="operation operator" id="operation_equals"> = </div> 
				</div>
				<div className="row3">
					<div className="operation operand" id="number_4"> 4 </div>
					<div className="operation operand" id="number_5"> 5 </div>
				 	<div className="operation operand" id="number_6"> 6 </div>
					 <div className="operation operator" id="operation_bckspce"> bckspce </div> 
				</div>
				<div className="row4">
					<div className="operation operand" id="number_1"> 1 </div>
					<div className="operation operand" id="number_2"> 2 </div>
				 	<div className="operation operand" id="number_3"> 3 </div>
					 <div className="operation operator" id="operation_."> . </div> 
				</div>
				<div className="row5"></div>
				<div className="row6"></div>
				
				</div>
			</div>
			
			
			</div>
		);
	}
}

export default MyCalculatorComponent;