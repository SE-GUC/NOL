import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


class merchandise extends Component {
  
  constructor(props) {
      super(props)
      this.state = { merchandises:[] }
      this.state.url = "http://localhost:3000/MUN/signin/MUNadmins/"
      this.getMerchandise()
      this.state.merchandise = {picture:" ",releaseDate:" "}
      this.state.flag = false
      this.state.merchandiseId = ""
      this.setpicture = this.setpicture.bind(this)
      this.setreleaseDate = this.setreleaseDate.bind(this)
      this.setDetails = this.setDetails.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
  }

  getMerchandise() {
    return axios.get(this.state.url+"get/merchandise").then(res => this.setState({ merchandises:res.data }))
  }

  setPicture(e) {
    const merchandise = this.state.merchandise
    merchandise.picture = e.target.value
    this.setState({ merchandise: merchandise })
  }
  
  setReleaseDate(e) {
    const merchandise = this.state.merchandise
    merchandise.releaseDate = e.target.value
    this.setState({ merchandise: merchandise })
  }
    
  handleSubmit(merchandise) {
    this.setState({ merchandise:{ picture: this.state.merchandise.picture, releaseDate: this.state.merchandise.releaseDate}})
    axios.post(this.state.url+"create/merchandise", this.state.merchandise)
  }

  handleSubmitEdit(merchandise) {
    this.setState({ merchandise:{ picture: this.state.merchandise.picture, releaseDate: this.state.merchandise.releaseDate}})
    axios.put(this.state.url+"update/merchandise/"+this.state.merchandiseId, this.state.merchandise)
  }

  updatemerchandise(merchandise) {
    this.setState({ flag: true })
    this.setState({ merchandiseId: merchandise._id })
    this.setState({ merchandise:{ picture: merchandise.picture, releaseDate: merchandise.releaseDate}})
  }

  deletemerchandise(id) {
    axios.delete(this.state.url+"delete/merchandise/"+ id)
  }

  loadmerchandise(merchandise) {
    return (
      <div>
        <button onClick={() => this.updatemerchandise(merchandise) }>
        Edit
        </button>
        <button onClick={() => this.deletemerchandise(merchandise._id) }>
        Delete
        </button>
        picture: {merchandise.picture} <br/>
        releaseDate: {merchandise.releaseDate} <br/>
      </div>
    );
  }
  
  render() {
    return (
      <div className="merchandises">
        <div><Link to="/">back</Link></div>
        <form onSubmit={this.handleSubmit}>
          picture: <input type="text" onChange={this.setpicture} name="picture"/>
          releaseDate: <input type="text" onChange={this.setreleaseDate} name="releaseDate"/>
          <input type="submit" value="Add merchandise" />
        </form>
        <div>
          {this.state.merchandises.map(merchandise => this.loadmerchandise(merchandise))}
        </div>
        {this.state.flag && <form onSubmit={this.handleSubmitEdit}>
          picture: <input type="text" value={this.state.merchandise.picture} onChange={this.setpicture} name="picture"/><br/>
          releaseDate: <input type="text" value={this.state.merchandise.releaseDate} onChange={this.setreleaseDate} name="releaseDate"/><br/>
          <button onClick={() => this.handleSubmitEdit() }>
          Edit text
          </button>
        </form>}
      </div>
    );
  }
}

export default merchandise;