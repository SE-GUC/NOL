import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

class Events extends Component {
  
  constructor(props) {
      super(props)
      this.state = { events:[] }
      this.state.url = "http://localhost:3000/MUN/signin/MUNadmins/"
      this.getEvents()
      this.state.event = {title:" ",summary:" ",MoreDetails:" "}
      this.state.flag = false
      this.state.eventId = ""
      this.setTitle = this.setTitle.bind(this)
      this.setSummary = this.setSummary.bind(this)
      this.setDetails = this.setDetails.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
  }

  getEvents() {
    return axios.get(this.state.url+"get/event").then(res => this.setState({ events:res.data }))
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
  
  handleSubmit(event) {
    this.setState({ event:{ title: this.state.event.title, summary: this.state.event.summary, MoreDetails: this.state.event.MoreDetails}})
    axios.post(this.state.url+"create/event", this.state.event)
  }

  handleSubmitEdit(event) {
    this.setState({ event:{ title: this.state.event.title, summary: this.state.event.summary, MoreDetails: this.state.event.MoreDetails}})
    axios.put(this.state.url+"update/event/"+this.state.eventId, this.state.event)
  }

  updateEvent(event) {
    this.setState({ flag: true })
    this.setState({ eventId: event._id })
    this.setState({ event:{ title: event.title, summary: event.summary, MoreDetails: event.MoreDetails}})
  }

  deleteEvent(id) {
    axios.delete(this.state.url+"delete/event/"+ id)
  }

  loadEvent(event) {
    return (
      <div>
        <button onClick={() => this.updateEvent(event) }>
        Edit
        </button>
        <button onClick={() => this.deleteEvent(event._id) }>
        Delete
        </button>
        Title: {event.title} <br/>
        Summary: {event.summary} <br/>
        More Details: {event.MoreDetails} 
      </div>
    );
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
          {this.state.events.map(event => this.loadEvent(event))}
        </div>
        {this.state.flag && <form onSubmit={this.handleSubmitEdit}>
          Title: <input type="text" value={this.state.event.title} onChange={this.setTitle} name="title"/><br/>
          Summary: <input type="text" value={this.state.event.summary} onChange={this.setSummary} name="summary"/><br/>
          More Details: <input type="text" value={this.state.event.MoreDetails} onChange={this.setDetails} name="moreDetails"/>
          <button onClick={() => this.handleSubmitEdit() }>
          Edit text
          </button>
        </form>}
      </div>
    );
  }
}

export default Events;