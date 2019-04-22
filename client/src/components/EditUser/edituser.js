import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

export default class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:'',
      name: '',
      email: '',
      password:''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillMount(){
    this.getUserDetails();
  }

  getUserDetails() {
    let userId = this.props.match.params.id;
      axios.get(`api/users/${userId}`)
          .then(response => {
              this.setState({ 
                id: response.data.id,
                name: response.data.name, 
                email: response.data.email,
                password: response.data.password });
          })
          .catch(function (error) {
              console.log(error);
          })
    }

    editUser(user){
      axios.request({
        method:'put',
        url:`api/users/${this.state.id}`,
        data: user
      }).then(response => {
        this.props.history.push('/');
      }).catch(err => console.log(err));
    }
  
    onSubmit(e){
      const user = {
        name: this.refs.name.value,
        email: this.refs.email.value,
        password: this.refs.password.value
      }
      this.editUser(user);
      e.preventDefault();
    }

    handleInputChange(e){
      const target = e.target;
      const value = target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }
 
    render(){
      return (
       <div>
          <br />
         <Link className="btn grey" to="/">Back</Link>
         <h1>Edit user</h1>
         <form onSubmit={this.onSubmit.bind(this)}>
            <div className="input-field">
              <input type="text" name="name" ref="name" value={this.state.name} onChange={this.handleInputChange} />
              <label htmlFor="name">Name</label>
            </div>
            <div className="input-field">
              <input type="text" name="email" ref="email" value={this.state.email} onChange={this.handleInputChange} />
              <label htmlFor="email">email</label>
            </div>
            <div className="input-field">
              <input type="text" name="password" ref="password" value={this.state.password} onChange={this.handleInputChange} />
              <label htmlFor="password">password</label>
            </div>
            <input type="submit" value="Save" className="btn" />
          </form>
        </div>
      )
    }
}