import React,  {Component} from 'react';




export default class Form extends Component{
	constructor(props) {
		super(props);
		this.state = {
			firstname: '',
		      lastname: '',
		      email: '',
		      phone: '',
		      address: ''
		}
		if(this.props.edit){
			this.state = this.props.data
		}
		
	}
	handleReset=()=>{
		this.setState({
			firstname: '',
		      lastname: '',
		      email: '',
		      phone: '',
		      address: ''
		})
	}
	handleChange = (name,e) =>{
		    var change = {}
		    change[name] = e.target.value
		    this.setState(change)
		  }

	render() {

		const isEdit = this.props.edit
		let button = null
		if(!isEdit){
			button = <button type="button" className="btn btn-lg btn-success" onClick={()=>{this.props.addFunction(this.state); this.handleReset()}}>Add</button>
		}
		else{
			button = <button type="button" className="btn btn-lg btn-info" onClick={()=>{this.props.saveFunction(this.props.data,this.state)}}>Save</button>
		}
		return (
			<div>
			<h1 className="text-primary">React Contact App </h1>
			<form>
				<div>
					<label className="input-control">Firstname</label><br />
					<input type="text" className="form-control" value={this.state.firstname} onChange={this.handleChange.bind(this, 'firstname')}/>
				</div>
				<div>
					<label className="input-control">Lastname</label><br/>
					<input type="text" className="form-control" value={this.state.lastname} onChange={this.handleChange.bind(this, 'lastname')}/>
				</div>
				<div>
					<label className="input-control">E-mail</label><br />
					<input type="text" className="form-control" value={this.state.email} onChange={this.handleChange.bind(this, 'email')}/>
				</div>
				<div>
					<label className="input-control">Address</label><br/>
					<input type="text" className="form-control" value={this.state.address} onChange={this.handleChange.bind(this, 'address')}/>
				</div>
				<div>
					<label className="input-control">Phone</label><br/>
					<input type="text" className="form-control" value={this.state.phone} onChange={this.handleChange.bind(this, 'phone')}/>
					{button}
				</div>
				
			</form>
			</div>
			)
	}
}

