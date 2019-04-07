import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

class ContactUs extends Component {
  
  constructor(props) {
      super(props)
      this.state = { cu:[] }
      this.state.url = "http://localhost:3000/contactus"
      this.getContactUs()
      this.state.contactus = {description:" ",number:" ",email:" ",instagram:" ",facebook:" ",snapchat:" "}
      this.state.flag = false
      this.state.contactusId = ""
      this.setDescription= this.setDescription.bind(this)
      this.setNumber = this.setNumber.bind(this)
      this.setEmail = this.setEmail.bind(this)
      this.setInstagram = this.setInstagram.bind(this)
      this.setFacebook = this.setFacebook.bind(this)
      this.setSnapchat = this.setSnapchat.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
  }

  getContactUs() {
    return axios.get(this.state.url+"get/contactus").then(res => this.setState({ cu:res.data }))
  }

  setDescription(e) {
    const contactus = this.state.contactus
    contactus.description = e.target.value
    this.setState({ contactus: contactus })
  }
  setNumber(e) {
    const contactus = this.state.contactus
    contactus.number = e.target.value
    this.setState({ contactus: contactus })
  }
  setEmail(e) {
    const contactus = this.state.contactus
    contactus.email = e.target.value
    this.setState({ contactus: contactus })
  }
  setInstagram(e) {
    const contactus = this.state.contactus
    contactus.instagram = e.target.value
    this.setState({ contactus: contactus })
  }
  setFacebook(e) {
    const contactus = this.state.contactus
    contactus.facebook = e.target.value
    this.setState({ contactus: contactus })
  }
  setSnapchat(e) {
    const contactus = this.state.contactus
    contactus.snapchat = e.target.value
    this.setState({ contactus: contactus })
  }
  handleSubmit(contactus) {
    this.setState({ contactus:{ description: this.state.contactus.description, number: this.state.contactus.number, email: this.state.contactus.email, instagram: this.state.contactus.instagram, facebook: this.state.contactus.facebook, snapchat: this.state.contactus.snapchat}})
    axios.post(this.state.url+"create/contactus", this.state.contactus)
  }

  handleSubmitEdit(contactus) {
    this.setState({ contactus:{ description: this.state.contactus.description, number: this.state.contactus.number, email: this.state.contactus.email, instagram: this.state.contactus.instagram, facebook: this.state.contactus.facebook, snapchat: this.state.contactus.snapchat}})
    axios.put(this.state.url+"update/contactus/"+this.state.contactusId, this.state.contactus)
  }

  updateContactUs(contactus) {
    this.setState({ flag: true })
    this.setState({ contactus: contactus._id })
    this.setState({ contactus:{ description: contactus.description, number: contactus.number, email: contactus.email, instagram: contactus.instagram, facebook: contactus.facebook, snapchat: contactus.snapchat}})
  }

  deleteContactUs(id) {
    axios.delete(this.state.url+"delete/contactus/"+ id)
  }

  loadContactUs(contactus) {
    return (
      <div>
        <button onClick={() => this.updateContactUs(contactus) }>
        Edit
        </button>
        <button onClick={() => this.deleteContactUs(contactus._id) }>
        Delete
        </button>
        Description: {contactus.deleteContactUs} <br/>
        Number: {contactus.number} <br/>
        Email: {contactus.email} <br/>
        Instagram: {contactus.instagram} <br/>
        Facebook: {contactus.facebook} <br/>
        Snapchat: {contactus.snapchat}
      </div>
    );
  }
  
  render() {
    return (
      <div className="ContactUs">
        <div><Link to="/">back</Link></div>
        <form onSubmit={this.handleSubmit}>
        Description: <input type="text" onChange={this.setDescription} name="description"/>
        Number: <input type="text" onChange={this.setNumber} name="number"/>
        Email: <input type="text" onChange={this.setEmail} name="email"/>
        Instagram: <input type="text" onChange={this.setInstagram} name="instagram"/>
        Facebook: <input type="text" onChange={this.setFacebook} name="facebook"/>
        Snapchat: <input type="text" onChange={this.setSnapchat} name="snapchat"/>
          <input type="submit" value="Add ContactUs" />
        </form>
        <div>
          {this.state.cu.map(contactus => this.loadContactUs(contactus))}
        </div>
        {this.state.flag && <form onSubmit={this.handleSubmitEdit}>
          Description: <input type="text" value={this.state.contactus.description} onChange={this.setDescription} name="description"/><br/>
          Number: <input type="text" value={this.state.contactus.number} onChange={this.setNumber} name="number"/><br/>
          Email: <input type="text" value={this.state.contactus.email} onChange={this.setEmail} name="email"/><br/>
          Instagram: <input type="text" value={this.state.contactus.instagram} onChange={this.setInstagram} name="instagram"/><br/>
          Facebook: <input type="text" value={this.state.contactus.facebook} onChange={this.setFacebook} name="facebook"/><br/>
          Snapchat: <input type="text" value={this.state.contactus.snapchat} onChange={this.setSnapchat} name="snapchat"/><br/>
          <button onClick={() => this.handleSubmitEdit() }>
          Edit text
          </button>
        </form>}
      </div>
    );
  }
}

export default ContactUs;