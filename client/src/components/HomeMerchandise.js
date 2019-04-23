import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

class HomeMerchandise extends Component {
  
  constructor() {
      super()
      this.state = { merchandise:[] }
      this.state.url = "http://localhost:3000/MUN/signin/MUNadmins/get/merchandise"
  }

  getMerchandise() {
    return axios.get(this.state.url).then(res => this.setState({ merchandise:res.data }))
  }
  
  render() {
    return (
      <div className="HomeMerchandise">
        <div><Link to="/merchandise">merchandiseLink</Link></div>
        <button onClick={() => this.getMerchandise() }>
          merchandise
        </button>
        <div>
          {this.state.merchandise.map(event => <li>Description: {this.state.merchandise.description} <br/> Date: {this.state.merchandise.Date} </li>)}
        </div>
      </div>
    );
  }
}

export default HomeMerchandise;
