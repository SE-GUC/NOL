import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import Main from './components/main'
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
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import subdomain from './components/subdomain'
import eachSubdomain from './components/eachSubdomain'
import awgaboutus from './components/awgaboutus'
import MUNSignUp from './components/munsignup'
import MUNSignIn from './components/munsignin'
import Aboutus from './components/aboutussection'
import Sara from './components/profile'
import Home from './components/home'
import Events from './components/events'
import AboutUs from './components/aboutus'
import CU from './components/cu'
import ContactUs from './components/contactus/contactus';
import HomeMerchandise from './components/HomeMerchandise'
import Merchandise from './components/merchandise'
import Gallery from './components/gallery'
import anon from './components/profile'
import Library from './components/library'
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
          <Route exact path="/user" component={profile} />
          <switch>
          <Route exact path="/faq" component={FAQs} />
          <Route exact path="/committiee" component={committiees} />
          <Route exact path="/committiee/:id" component={eachCommittiee} />
          <Route exact path="/faq/:id" component={eachFAQ} />
          <Route exact path="/subdomain" component={subdomain} />
          <Route exact path="/subdomain/:id" component={eachSubdomain} />
          <Route exact path="/awgaboutus" component={awgaboutus} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/munsignup" component={MUNSignUp} />
          <Route exact path="/munsignin" component={MUNSignIn} />
          <Route exact path="/aboutus/:id" component={Aboutus}/>
          <Route path="/users" component={Sara} />
          <Route exact path="/homepage" component={Home} />
          <Route exact path="/events/:id" component={Events} />
          <Route exact path="/aboutus" component={AboutUs} />
          <Route exact path="/cu" component={CU} />
          <Route exact path="/contactus" component={ContactUs} />
          <Route exact path="/HomeMerchandise" component={HomeMerchandise} />
          <Route exact path="/merchandise" component={Merchandise} />
          <Route path="/gallery" component={Gallery}/>
          <Route exact path="/profile2" component={anon}/>
          <Route exact path="/library" component={Library}/>
          <Route exact path="/home2" component={Home2} />
          </switch>
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
            <switch>
              <PrivateRoute path="/profile" exact component={UsersList} />
              <PrivateRoute path="/edit/:id" exact component={EditUser} />
              <PrivateRoute path="/show" exact component={List} />
            </switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
