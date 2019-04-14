import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

class MUNSignIn extends Component {
  
  constructor(props) {
      super(props)
      this.state = { email: "", password: ""}
      this.setEmail = this.setEmail.bind(this)
      this.setPassword = this.setPassword.bind(this)
      this.submit = this.submit.bind(this)
  }
  setEmail(event) {
    this.setState({ email: event.target.value })
  }
  
  setPassword(event) {
    this.setState({ password: event.target.value })
  }
  
  submit(event) {
    event.preventDefault()
    axios.post("http://localhost:5000/MUN/signin/MUNadmins", {email:this.state.email,password:this.state.password}).then((res) => {alert("Success: "+res.data.username)})
  }

  render() {
    return (
      <div className="MUNSignIn">
        <div><Link to="/">back</Link></div>
        <form onSubmit={this.submit}>
          Email: <input type="text" onChange={this.setEmail}/>
          Password: <input type="text" onChange={this.setPassword}/>
          <input type="submit" value="Sign In" />
        </form>
      </div>
    )
  }
}

export default MUNSignIn;