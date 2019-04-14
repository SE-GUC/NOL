import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

class CU extends Component {
  
  constructor() {
      super()
      this.state = { contactus:[] }
      this.state.url = "http://localhost:3000/contactus"
  }

  getContactUs() {
    return axios.get(this.state.url).then(res => this.setState({ contactus:res.data }))
  }
  
  render() {
    return (
      <div className="Homepage">
        <div><Link to="/contactus">contactusLink</Link></div>
        <button onClick={() => this.getContactUs() }>
          ContactUs
        </button>
        <div>
          {this.state.contactus.map(contactus => <li>Description: {contactus.description} <br/> Number: {contactus.number} <br/> Email: {contactus.email} <br/> Instagram: {contactus.instagram} <br/> Facebook: {contactus.facebook}<br/> Snapchat: {contactus.snapchat}</li>)}
        </div>
      </div>
    );
  }
}

export default CU;