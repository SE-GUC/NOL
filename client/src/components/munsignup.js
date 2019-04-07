import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

class MUNSignUp extends Component {
  
  constructor(props) {
      super(props)
      this.state = { url:"http://localhost:5000/MUN/signup/", email: " ", username: " ", password: "", aL: "", preferredcommittee: ""}
      this.setEmail = this.setEmail.bind(this)
      this.setUsername = this.setUsername.bind(this)
      this.setPassword = this.setPassword.bind(this)
      this.setAl = this.setAl.bind(this)
      this.setPreferredcomittee = this.setPreferredcomittee.bind(this)
      this.submit = this.submit.bind(this)
  }

  setEmail(event) {
    this.setState({ email: event.target.value })
  }
  
  setUsername(event) {
    this.setState({ username: event.target.value })
  }

  setPassword(event) {
    this.setState({ password: event.target.value })
  }
  
  setAl(event) {
    this.setState({ aL: event.target.value })
  }

  setPreferredcomittee(event) {
    this.setState({ preferredcommittee: event.target.value })
  }
  
  submit(event) {
    event.preventDefault()
    axios.post(this.state.url, {email:this.state.email,
    username:this.state.username,
    password:this.state.password,
    aL:this.state.aL,
    preferredcommittee:this.state.preferredcommittee}).then((res) => {alert("Success: "+res.data._id)})
  }

  render() {
    return (
      <div className="MUNSignUp">
        <div><Link to="/">back</Link></div>
        <form onSubmit={this.submit}>
          Email: <input type="text" onChange={this.setEmail}/>
          Username: <input type="text" onChange={this.setUsername}/>
          Password: <input type="text" onChange={this.setPassword}/>
          aL: <input type="text" onChange={this.setAl}/>
          preferredcommittee: <input type="text" onChange={this.setPreferredcomittee}/>
          <input type="submit" value="Sign Up" />
        </form>
      </div>
    )
  }
}

export default MUNSignUp;