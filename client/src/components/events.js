import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

class Events extends Component {
  
  constructor(props) {
      super(props)
      this.state = { id:props.match.params.id }
      this.state.url = "http://localhost:3000/MUN/signin/MUNadmins/"
      this.state.event = {title:"",summary:"",MoreDetails:""}
      this.state.flag = false
      axios.get(this.state.url+"get/event/"+this.state.id).then(res => this.setState({ event:res.data }))
      this.setTitle = this.setTitle.bind(this)
      this.setSummary = this.setSummary.bind(this)
      this.setDetails = this.setDetails.bind(this)
      this.updateEvent = this.updateEvent.bind(this)
      this.deleteEvent = this.deleteEvent.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleSubmitEdit = this.handleSubmitEdit.bind(this)
  }

  setTitle(e) {
    const event = this.state.event
    event.title = e.target.value
    this.setState({ event: event })
  }
  
  setSummary(e) {
    const event = this.state.event
    event.summary = e.target.value
    this.setState({ event: event })
  }
  
  setDetails(e) {
    const event = this.state.event
    event.MoreDetails = e.target.value
    this.setState({ event: event })
  }
  
  handleSubmit() {
    this.setState({ event:{ title: this.state.event.title, summary: this.state.event.summary, MoreDetails: this.state.event.MoreDetails}})
    axios.post(this.state.url+"create/event", this.state.event)
  }

  handleSubmitEdit() {
    this.setState({ event:{ title: this.state.event.title, summary: this.state.event.summary, MoreDetails: this.state.event.MoreDetails}})
    axios.put(this.state.url+"update/event/"+this.state.id, this.state.event)
  }

  updateEvent() {
    this.setState({ flag: true })
  }

  deleteEvent() {
    axios.delete(this.state.url+"delete/event/"+this.state.id)
    this.props.history.push('/')
  }
  
  render() {
    return (
      <div className="Events">
        <div><Link to="/">back</Link></div>
        <form onSubmit={this.handleSubmit}> 
          Title: <input type="text" onChange={this.setTitle} name="title"/>
          Summary: <input type="text" onChange={this.setSummary} name="summary"/>
          More Details: <input type="text" onChange={this.setDetails} name="moreDetails"/>
          <input type="submit" value="Add Event" />
          </form>

          <div>
          <button onClick={() => this.updateEvent() }>
          Edit
          </button>
          <button onClick={() => this.deleteEvent() }>
          Delete
          </button> <br/>
          Title: {this.state.event.title} <br/>
          Summary: {this.state.event.summary} <br/>
          More Details: {this.state.event.MoreDetails} 
          </div>

          {this.state.flag && <form onSubmit={this.handleSubmitEdit}>
          Title: <input type="text" value={this.state.event.title} onChange={this.setTitle} name="title"/><br/>
          Summary: <input type="text" value={this.state.event.summary} onChange={this.setSummary} name="summary"/><br/>
          More Details: <input type="text" value={this.state.event.MoreDetails} onChange={this.setDetails} name="moreDetails"/>
          <br/>
          <button onClick={() => this.handleSubmitEdit }>
          Update Event
          </button>
        </form>}
      </div>
    );
  }
}

export default Events;