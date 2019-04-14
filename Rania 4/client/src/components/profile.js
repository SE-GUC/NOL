import React, { Component } from 'react';
import axios from 'axios'

class Profile extends Component {
  
  constructor(){
    super()
    this.state = { user: {_id:"5ca936cd7942b12d70be4c1c", email:"", username:"", password:"", aL:"", preferredcommittee:""}}
    axios.get("http://localhost:3000/MUN/signin/MUNadmins/munusers/"+this.state.user._id).then( result => this.setState({ user: result.data }))
  }

  render() {
    return (
      <div className="Profile">
            <div> Email: {this.state.user.email} </div><br/>
            <div> Username: {this.state.user.username} </div><br/>
            <div> Al: {this.state.user.aL} </div><br/>
            <div> Preferred Committee: {this.state.user.preferredcommittee} </div>
      </div>
    );
  }
}

export default Profile;
