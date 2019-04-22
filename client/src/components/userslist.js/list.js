import React, { Component } from 'react';
import axios from 'axios';
import TableRow from '../TableRow';
import { Link } from 'react-router-dom';

export default class List extends Component {
    
  constructor(props) {
    super(props);
    this.state = {users: []};
  }
  componentDidMount(){
    axios.get('api/users')
      .then(response => {
        this.setState({ users: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
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
              users list &nbsp;
            </h3>
            <h4><Link
                to="/profile/:id"
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem"
                }}
                className="btn btn-primary"
              >
                profile
              </Link></h4>
          </div>
          <div class="panel-body">
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>name</th>
                  <th>email</th>
                  <th>password</th>
                </tr>
              </thead>
              <tbody>
                { this.tabRow() }
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
 
 
