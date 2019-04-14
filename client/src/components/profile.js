import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button';
import ToggleDisplay from 'react-toggle-display';

import './profile.css';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      show:false,
      users: []
    }
  }
  componentDidMount(){
    fetch('http://localhost:3000/user/5ca74f71e3fabd39ec160f0f').then(res=>res.json())
    .then(userr=>this.setState({users:userr.data,is_loading:false}))
    
  }

  
  handleClick() {
    this.setState({
      show: !this.state.show
    });
  }






  render() {
    const {users}=this.state;
    return (
     
      
     
     <div className="App">
     
    
     <Jumbotron>
      
      <h1>Profile</h1>
      <hr></hr>
     
      
      <p className="text1">Name:</p>
      <p className="text2">{users.name}</p>
      
        <br></br>
        
      <p className="text1">Email:</p>
      <p className="text2">{users.email}</p>
      
      <br></br>
      <ToggleDisplay if={this.state.show}>
            <dl>
            <dt className="text1">Password:</dt>  <dd className="text2">{users.password}</dd>
           
            </dl>
      </ToggleDisplay>

     <p>
     <Button  onClick={ () => this.handleClick() }  className="primary">{this.state.show?"Hide":"Show"} password</Button>
     </p>
      
      </Jumbotron>
      </div>
      
    );
  }
}

export default App;
