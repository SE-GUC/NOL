import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Main extends Component {
  
  constructor(props) {
      super(props)
  }

  render() {
    return (
      <div className="Main">
        <div><Link to="/munsignup">Sign Up</Link></div>
        <div><Link to="/munsignin">Sign In</Link></div>
      </div>
    )
  }
}

export default Main;