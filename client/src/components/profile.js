import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button';
import ToggleDisplay from 'react-toggle-display';
import Form from 'react-bootstrap/Form';
import './profile.css';


class App extends Component {
    
  constructor(props){
    super(props);
    this.state = {
      show:false,
      users: [],
      viewName:false,
      viewEmail:false,
      viewPass:false
    }
  }
  componentDidMount(){
    fetch('http://localhost:3000/user/5cb33d2c0152c9147835b516').then(res=>res.json())
    .then(userr=>this.setState({users:userr.data,is_loading:false}))
    
  }

  
  handleClick() {
    this.setState({
      show: !this.state.show
    });
  }

  viewUpdateName(){
    this.setState({viewName:true});
  }

  viewUpdateEmail(){
    this.setState({viewEmail:true});
  }

  viewUpdatePass(){
    this.setState({viewPass:true});
  }


  updateName(x,y){
    fetch('http://localhost:3000/user/update/'+x, 
      { method: 'PUT' ,
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify({name:y})
    }).then(response => response.json())
  }

  updateEmail(x,y){
    fetch('http://localhost:3000/user/update/'+x, 
      { method: 'PUT' ,
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify({email:y})
    }).then(response => response.json())
  }

  updatePass(x,y){
    fetch('http://localhost:3000/user/update/'+x, 
      { method: 'PUT' ,
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify({password:y})
    }).then(response => response.json())
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

     <p>
     <Button  onClick={ () => this.viewUpdateName() }  className="primary"> Update Name</Button>
     </p>

     <p>
     <Button  onClick={ () => this.viewUpdateEmail() }  className="primary"> Update Email</Button>
     </p>

     <p>
     <Button  onClick={ () => this.viewUpdatePass() }  className="primary"> Update Password</Button>
     </p>

     <ToggleDisplay if={this.state.viewName}>
            <dl>
            <Form.Control id="name"type="name"  placeholder="Enter Name"></Form.Control>
            <Button  onClick={ () => this.updateName(users._id,document.getElementById("name").value) }  className="primary"> Submit</Button>
           
            </dl>
      </ToggleDisplay>

      <ToggleDisplay if={this.state.viewEmail}>
            <dl>
            <Form.Control id="email"type="email"  placeholder="Enter Email"></Form.Control>
            <Button  onClick={ () => this.updateEmail(users._id,document.getElementById("email").value) }  className="primary"> Submit</Button>
           
            </dl>
      </ToggleDisplay>

      <ToggleDisplay if={this.state.viewPass}>
            <dl>
            <Form.Control id="password"type="password"  placeholder="Enter password"></Form.Control>
            <Button  onClick={ () => this.updatePass(users._id,document.getElementById("password").value) }  className="primary"> Submit</Button>
           
            </dl>
      </ToggleDisplay>
     
     
      
      </Jumbotron>
      </div>
      
    );
  }
}

export default App;
