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
import UsersList from './components/showprofile/show';
import EditUser from './components/EditUser/edituser';
import List from './components/userslist.js/list';
import profile from './components/Profile/profile'
import FAQs from './components/FAQs/FAQs'
import committiees from './components/Committiees/committiees'
import eachCommittiee from './components/eachCommittiee/eachCommittiee'
import eachFAQ from './components/eachFAQ/eachFAQ'

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
            <Route exact path="/user" component={profile} />
          <Route exact path="/faq" component={FAQs} />
          <Route exact path="/committiee" component={committiees} />
          <Route exact path="/committiee/:id" component={eachCommittiee} />
          <Route exact path="/faq/:id" component={eachFAQ} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
            <switch>
              <PrivateRoute path="/profile" exact component={UsersList} />
              <PrivateRoute path="/edit" exact component={EditUser} />
              <PrivateRoute path="/show" exact component={List} />
            </switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
