import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import Main from './components/main'
import MUNSignUp from './components/munsignup'
import MUNSignIn from './components/munsignin'
import Home from './components/home'
import Events from './components/events'
import Home2 from './components/home2'
import Gallery from './components/gallery'
import Profile from './components/profile'
import Library from './components/library'
import HomeMerchandise from './components/HomeMerchandise'
import Merchandise from './components/merchandise'
import FAQs from './components/FAQs'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
          <div className="maggie">
          <Route path="/" component={Main} />
          <Route path="/munsignup" component={MUNSignUp} />
          <Route exact path="/munsignin" component={MUNSignIn} />
          </div>
          <div className="sara">
          <Route exact path="/" component={Home} />
          <Route exact path="/events" component={Events} />
          </div>
          <div className="hania">
          <Route exact path="/" component={Home2} />
          <Route exact path="/contactus" component={ContactUs} />
          </div>
          <div className="seif">
          <Route path="/gallery" component={Gallery}/>
          </div>
          <div className="rania">
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/library" component={Library}/>
          </div>
          <div className="farida">
          <Route path="/user" component={profile} />
          <Route path="/faq" component={FAQs} />
          </div>
          <div className="ziad">
          <Route exact path="/" component={HomeMerchandise} />
          <Route exact path="/merchandise" component={Merchandise} />
          </div>
          <div className="Ali">
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
        </Router>
       </div>
    );
  }
}

export default App;
