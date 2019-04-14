import React, { Component } from 'react';
import axios from 'axios';

export default class EditUser extends Component {
  constructor(props) {
    super(props);
    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
    this.onChangeGstNumber = this.onChangeGstNumber.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      email: '',
      password:''
    }
  }

  componentDidMount() {
      axios.get('api/users/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                name: response.data.name, 
                email: response.data.email,
                password: response.data.password });
          })
          .catch(function (error) {
              console.log(error);
          })
    }

  onChangePersonName(e) {
    this.setState({
      name: e.target.value
    });
  }
  onChangeBusinessName(e) {
    this.setState({
      email: e.target.value
    })  
  }
  onChangeGstNumber(e) {
    this.setState({
      password: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
    };
    axios.post('api/users/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
    this.props.history.push('/');
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Update user</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label> name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.name}
                      onChange={this.onChangePersonName}
                      />
                </div>
                <div className="form-group">
                    <label>email: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.email}
                      onChange={this.onChangeBusinessName}
                      />
                </div>
                <div className="form-group">
                    <label>password: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.password}
                      onChange={this.onChangeGstNumber}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Update user" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}