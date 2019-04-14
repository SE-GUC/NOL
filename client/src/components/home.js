import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

class Home extends Component {
  
  constructor(props) {
      super(props)
      this.state = { events:[] }
  }

  getEvents() {
    return axios.get("http://localhost:3000/MUN/signin/MUNadmins/get/event").then(res => this.setState({ events:res.data }))
  }
  
  render() {
    return (
      <div className="Home">
        <div><Link to="/aboutus">About Us Link</Link></div>
        <button onClick={() => this.getEvents() }>
          Events
        </button>
        <div>
          {this.state.events.map(event =>
             <li><Link to={"/events/"+event._id}>Title: {event.title}</Link> <br/> Summary: {event.summary} </li>)}
        </div>
      </div>
    );
  }
}

export default Home;