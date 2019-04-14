
import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button';
import ToggleDisplay from 'react-toggle-display';
import Form from 'react-bootstrap/Form';

import './eachCommittiee.css';


class eachCommittiee extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      committiee: [],
      show_head:false,
      show_comm:false

    }
  }
  componentDidMount(){
    fetch(`http://localhost:3000/committiee/${this.props.match.params.id}`).then(res=>res.json())
    .then(comm=>this.setState({committiee:comm.data,is_loading:false}))
    
  }

  showHead(){
    this.setState({show_head:true});
  }

  showCommittiee(){
    this.setState({show_comm:true});
  }

  editHead(x,y){
    fetch('http://localhost:3000/committiee/'+x, 
      { method: 'PUT' ,
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify({head_name:y})
    }).then(response => response.json())
    //this.render();

  }
  editComm(x,y){
    fetch('http://localhost:3000/committiee/'+x, 
      { method: 'PUT' ,
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify({name:y})
    }).then(response => response.json())
  }


  deleteCommittiee(x){
    fetch('http://localhost:3000/committiee/'+x, 
      { method: 'DELETE' ,
      headers:{'Content-Type': 'application/json'}})
    .then(response => response.json())
 
  }  

  render() {
    const {committiee}=this.state;
    return (
     
      
     
     <div className="App">
     
    
     <Jumbotron>
      
      <h1>Committiee</h1>
      <hr></hr>
     
      
      <p className="text1">Name:</p>
      <p className="text2">{committiee.name}</p>
      {/* <br></br> */}
      <Button  onClick={ () => this.showCommittiee() }  className="primary">Edit Committiee Name</Button>
        <br></br>
        <br></br>
        
      <p className="text1">Head Name:</p>
      <p className="text2">{committiee.head_name}</p>
      
      <Button  onClick={ () => this.showHead() }  className="primary"> Edit Head Name</Button>      
      <br></br>
      <br></br>
      <ToggleDisplay if={this.state.show_comm}>
            <dl>
            <Form.Control id="comm"type="headName"  placeholder="Enter New Committiee Name"></Form.Control>
            <Button  onClick={ () => this.editComm(committiee._id,document.getElementById("comm").value) }  className="primary">Submit</Button>      
            </dl>
      </ToggleDisplay>
      <br></br>
      <ToggleDisplay if={this.state.show_head}>
            <dl>
            <Form.Control id="head"type="headName"  placeholder="Enter New Head Name"></Form.Control>
            <Button  onClick={ () => this.editHead(committiee._id,document.getElementById("head").value) }  className="primary">Submit</Button>      
            </dl>
      </ToggleDisplay>
      
     


     { <p>
     {/* <Button  onClick={ () => this.showHead() }  className="primary"> Edit Head Name</Button>
     <br></br>
     <br></br>
     <Button  onClick={ () => this.showCommittiee() }  className="primary">Edit Committiee Name</Button>
     <br></br>
     <br></br> */}
     <br></br>
     <Button  onClick={ () => this.deleteCommittiee(committiee._id) } variant="danger">Delete Committiee</Button>
     </p> }
      
      </Jumbotron>
      </div>
      
    );
  }
}

export default eachCommittiee;
