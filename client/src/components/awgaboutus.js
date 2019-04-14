import React, { Component } from 'react';
//import { Redirect } from 'react-router-dom'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button';
import ToggleDisplay from 'react-toggle-display';
import Form from 'react-bootstrap/Form';
//import Card from 'react-bootstrap/Card';

//import './profile.css';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {

      AWGaboutus: [],
      show_desc:false,
      show_mission:false,
      show_vision:false

    }
  }

  showDesc(){
    this.setState({show_desc:true});
  }

  showMission(){
    this.setState({show_mission:true});
  }
  showVision(){
    this.setState({show_vision:true});
  }


  componentDidMount(){
    fetch('http://localhost:3000/awgaboutus/5cb0ceaad433c704f481f3ee').then(res=>res.json())
    .then(awgaboutus=>this.setState({AWGaboutus:awgaboutus.data}))
    
  }

  editdesc(x,y){
    fetch('http://localhost:3000/awgaboutus/update/'+x, 
      { method: 'PUT' ,
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify({description:y})
    }).then(response => response.json())
  }
  editmission(x,y){
    fetch('http://localhost:3000/awgaboutus/update/'+x, 
      { method: 'PUT' ,
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify({mission:y})
    }).then(response => response.json())
  }
  editvision(x,y){
    fetch('http://localhost:3000/awgaboutus/update/'+x, 
      { method: 'PUT' ,
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify({vision:y})
    }).then(response => response.json())
  }


  
  

  render() {
    const {AWGaboutus}=this.state;
    
    return (
    
      
     
     <div className="awgaboutus">
     <h2>About AWG</h2>
    
     <Jumbotron>
       <h3 className="text1">Description:</h3><br></br>
       <p className="text2">{AWGaboutus.description}</p>

       <Button  onClick={ () => this.showDesc() }  className="primary">Edit Description</Button>
        <br></br>

       <ToggleDisplay if={this.state.show_desc}>
            <dl>
            <Form.Control id="desc"type="description"  placeholder="Enter New Description Here"></Form.Control><br></br>
            <Button  onClick={ () => this.editdesc(AWGaboutus._id,document.getElementById("desc").value) }  className="primary">Submit</Button>      
            </dl>
       </ToggleDisplay>
        <br></br>
        <br></br>

        
       <h3 className="text1">Mission:</h3><br></br>
       <p className="text2">{AWGaboutus.mission}</p>
       <Button  onClick={ () => this.showMission() }  className="secondary">Edit Mission</Button>
        <br></br>

       <ToggleDisplay if={this.state.show_mission}>
            <dl>
            <Form.Control id="mission"type="miss"  placeholder="Enter New Mission Here"></Form.Control><br></br>
            <Button  onClick={ () => this.editmission(AWGaboutus._id,document.getElementById("mission").value) }  className="primary">Submit</Button>      
            </dl>
       </ToggleDisplay>
        <br></br>
        <br></br>


       <h3 className="text1">Vision:</h3><br></br>
       <p className="text2">{AWGaboutus.vision}</p>
       <Button  onClick={ () => this.showVision() }  className="primary">Edit Vision</Button>
        <br></br>

       <ToggleDisplay if={this.state.show_vision}>
            <dl>
            <Form.Control id="vision"type="vis"  placeholder="Enter New Vision Here"></Form.Control><br></br>
            <Button  onClick={ () => this.editvision(AWGaboutus._id,document.getElementById("vision").value) }  className="primary">Submit</Button>      
            </dl>
       </ToggleDisplay>

      </Jumbotron>
      </div>
      
    );
  }
}


export default App;
