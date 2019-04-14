import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

class AboutUs extends Component {
  
  constructor(props) {
      super(props)
      this.state = { id:"5cb127ba0b63b722d09ad1fa" }
      this.state.url = "http://localhost:3000/MUN/signin/MUNadmins/"
      this.state.aboutUs = { misson:"", vision:"", clubname:"", achievement_Desc:"", achievement_Pic:"" }
      axios.get(this.state.url+"aboutus/"+this.state.id).then(res => this.setState({ aboutUs:res.data }))
      this.deleteAboutUs = this.deleteAboutUs.bind(this)
    }
  
  deleteAboutUs() {
    axios.delete(this.state.url+"aboutus/"+this.state.id)
  }
  
  render() {
    return (
      <div className="AboutUs">
        <div><Link to="/">back</Link></div>
        <div>
            Misson: {this.state.aboutUs.misson} <br/>
            Vision: {this.state.aboutUs.vision} <br/>
            Club Name: {this.state.aboutUs.clubname} <br/>
            Achievement Description: {this.state.aboutUs.achievement_Desc} <br/>
            Achievement Picture: {this.state.aboutUs.achievement_Pic} <br/>
        </div>
        <button onClick={() => this.deleteAboutUs() }>
            Delete
        </button>
      </div>
    );
  }
}

export default AboutUs;