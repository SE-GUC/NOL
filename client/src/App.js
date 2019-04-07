import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    imageUrl: ''
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>GUCMUN Development</h1> <img
        style={{width:100, height:100}}
         src="http://www.guc.edu.eg//img/content/student_life/clubs_organizations/GUCMUN%20logo.jpg">
         </img>
        </header>
        <body className="App-body">
          <h2> Body here</h2>
          </body>
      </div>
    );
  }
}

export default App;
