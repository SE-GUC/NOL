import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TableRow from '../TableRow';

export default class UsersList extends Component {

  constructor(props) {
    super(props);
    this.state = { users: []};
  }

  componentDidMount(){
    axios.get('api/users'+this.props.match.params.id)
      .then(response => {
        this.setState({ users: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  delete(id){
    console.log(id);
    axios.delete('/api/users/'+id)
      .then((result) => {
        this.props.history.push("/")
      });
  }

  tabRow(){
    return this.state.users.map(function(object, i){
        return <TableRow obj={object} key={i} />;
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
            <h4><Link to={`/show`} class="glyphicon glyphicon-th-list"> users List</Link></h4>
            <dl>
              <dt>name:</dt>
              <dd>{this.tabRow().name}</dd>
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