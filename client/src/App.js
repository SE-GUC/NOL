import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Gallery from './components/gallery'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/gallery" component={Gallery}/>
        </Router>
      </div>
    );
  }
}

export default App;
