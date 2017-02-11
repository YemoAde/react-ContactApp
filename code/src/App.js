import React, { Component } from 'react';
import Form from './Form';
import View from './View';
import logo from './logo.svg';
import './App.css';

const styles = {
  header: {
    textAlign: 'center',
  },
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 'add',
      contacts: []
    }
  }
  handleAdd = (value)=>{
    console.log(value)
    var temp = this.state.contacts;
    temp.push(value);
    this.setState({contacts : temp})
    console.log(this.state.contacts)
  }
  handleDelete =(value)=>{
    var temp = this.state.contacts;
    temp.splice(temp.indexOf(value),1)
    this.setState({contacts: temp})
  }
  handleSave=(value, newValue)=>{
    var temp = this.state.contacts;
    this.handleDelete(value);
    this.handleAdd(newValue);
    this.setState({page: 'add'})
  }
  render() {
    const currentPage = this.state.page

    if(currentPage == 'add'){
      return (
      <div>
        <Form data={this.state} edit={false} addFunction={this.handleAdd}/>
        <button type="button" className="btn btn-sm btn-primary" onClick={()=>{ this.setState({page: 'view'}) }}>View Contacts</button>
      </div>
    );
    }
    else{
      return (
      <div>
        <View data={this.state.contacts} deleteFunction={this.handleDelete} saveFunction={this.handleSave}/>
        <button type="button" className="btn btn-sm btn-success" onClick={()=>{this.setState({page: 'add'})}}>Add Contacts</button>
      </div>
    );
    }
    
  }
}

export default App;
