import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import profile from './components/Profile/profile'
import FAQs from './components/FAQs/FAQs'
import committiees from './components/Committiees/committiees'
import eachCommittiee from './components/eachCommittiee/eachCommittiee'
import eachFAQ from './components/eachFAQ/eachFAQ'


class App extends Component {
    
  render() {
    return (
      <Router>
          <Route exact path="/user" component={profile} />
          <Route exact path="/faq" component={FAQs} />
          <Route exact path="/committiee" component={committiees} />
          <Route exact path="/committiee/:id" component={eachCommittiee} />
          <Route exact path="/faq/:id" component={eachFAQ} />
      </Router>
    );
  }
}

export default App;