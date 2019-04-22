import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {

  constructor(props) {
        super(props);
        this.onDelete = this.onDelete.bind(this);
    }
    
    onDelete(){
      let userId = this.props.obj._id;
      axios.delete(`api/users/${userId}`)
        .then(response => {
          this.props.history.push('/');
        }).catch(err => console.log(err));
    }
    

  render() {
    return (
        <tr>
          <td>
            {this.props.obj.name}
          </td>
          <td>
            {this.props.obj.email}
          </td>
          <td>
            {this.props.obj.password}
          </td>
          <td>
            <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
            <button onClick={this.onDelete} className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;