import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class UsersList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: {}
    };
  }

  componentDidMount() {
    axios.get('/api/users/'+this.props.match.params.id)
      .then(res => {
        this.setState({ users: res.data });
        console.log(this.state.users);
      });
  }

  delete(id){
    console.log(id);
    axios.delete('/api/users/'+id)
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              {this.state.users.name}
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/show"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> users List</Link></h4>
            <dl>
              <dt>name:</dt>
              <dd>{this.state.users.name}</dd>
              <dt>email:</dt>
              <dd>{this.state.users.email}</dd>
              <dt>password:</dt>
              <dd>{this.state.users.password}</dd>
            </dl>
            <Link to={`/edit/${this.state.users._id}`} class="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.users._id)} class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}