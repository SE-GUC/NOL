import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Main extends Component {
  
  render() {
    return (
      <div className="Main">
        <div><Link to="/munsignup">Sign Up</Link></div>
        <div><Link to="/munsignin">Sign In</Link></div>
        <div><Link to='/aboutus/0'>About us Section</Link></div>
      </div>
    )
  }
}

export default Main;