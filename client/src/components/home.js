import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

class Home extends Component {
  
  constructor() {
      super()
      this.state = { events:[] }
      this.state.url = "http://localhost:3000/MUN/signin/MUNadmins/get/event"
  }

  getEvents() {
    return axios.get(this.state.url).then(res => this.setState({ events:res.data }))
  }
  
  render() {
    return (
      <div className="Home">
        <div><Link to="/events">eventsLink</Link></div>
        <button onClick={() => this.getEvents() }>
          Events
        </button>
        <div>
          {this.state.events.map(event => <li>Title: {event.title} <br/> Summary: {event.summary} </li>)}
        </div>
      </div>
    );
  }
}

export default Home;