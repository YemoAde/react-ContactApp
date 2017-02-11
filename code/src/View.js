import React, {Component} from 'react';

import Form from './Form'


class ContactItem extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div>
				<h4>Firstname: {this.props.contact.firstname}</h4>
				<h4>Lastname: {this.props.contact.lastname}</h4>
				<h4>Address: {this.props.contact.address}</h4>
				<h4>Phone: {this.props.contact.phone}</h4>
				<h4>Email: {this.props.contact.email}</h4>
				<p><button type="button" className="btn btn-danger" onClick={()=>{
					this.props.deleteFunction(this.props.contact);
				}}>Delete</button>
					<button type="button" className="btn btn-info" onClick={()=>{
					this.props.editFunction(this.props.contact);
				}}>Edit</button>
				</p>
			</div>
		)
	}
}
		


export default class View extends Component {
	constructor(props) {
		super(props);

		this.state ={
			isEdit: false,
			editData: {}
		}
	}
	handleEdit =(value)=>{
		this.setState({editData: value})
		this.setState({isEdit: true})
	}

	render() {
		const isEdit = this.state.isEdit
		if(!isEdit){
			return(
			<div>
				<h1>View</h1>
				<div>
				{this.props.data.map((item)=>
					<ContactItem contact={item}
					editFunction={this.handleEdit}
					deleteFunction={this.props.deleteFunction}/>
				)}
				</div>

			</div>
			)
		}
		else{
			return(
			<div>
				<Form edit={true} data={this.state.editData} saveFunction={this.props.saveFunction}/>
			</div>
			)
		}
		
	}
}