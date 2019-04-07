import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

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

import "./App.css";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
 store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
   store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store= {store}>
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
        </Router>
      </Provider>
    );
  }
}
export default App;
