import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import ToggleDisplay from 'react-toggle-display';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

 import './committiees.css';
 

class Committiee extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      
      committiees: [],
      redirect:false,
      comm_id:null,
      viewComm:false,
      comm_name:null,
      head_name:null,
      head_Id:null
      // errors:{comm_name:'',head_name:'',head_Id:null}
      
    }
  }
  componentDidMount(){
    fetch('http://localhost:3000/committiee/').then(res=>res.json())
    .then(committiee=>this.setState({committiees:committiee.data}))
    
  }
  
  viewComm(x){
    this.setState({redirect:true, comm_id:x})
  }

  viewAdd(){
    this.setState({viewComm:true});
  }

  addComm(x,y,z){
    fetch('http://localhost:3000/committiee/', 
    { method: 'POST' ,
    headers:{'Content-Type': 'application/json'},
    body:JSON.stringify({name:x,
    head_name:y,
    head_Id: parseInt(z)})
  }).then(response => response.json())
  }

  



render() {
    if(this.state.redirect){
       const path = `/committiee/${this.state.comm_id}`
        return <Redirect to={path}/>;
      }
    
      else{
    return (
    
      
     
     <div className="committiees">
     
     {this.state.committiees.map(comm=>
     <div> 
        <Card class="comm" style={{ width: '18rem' }} key={comm._id}> 
        <Card.Body>
          <Card.Title>{comm.name}</Card.Title>
          
          <Button  onClick={ () => this.viewComm(comm._id)}>View</Button>
        </Card.Body>
      </Card>
       <br></br>
       </div>
     )}
      <Button  onClick={ () => this.viewAdd()} className="hello">Add</Button>
      <ToggleDisplay if={this.state.viewComm} className="bye">
            <dl>
            <Form.Control id="commName"type="commName"  placeholder="Enter New Committiee Name"className="bye1"></Form.Control>
            <Form.Control id="commHead"type="commHead"  placeholder="Enter New Head Name" className="bye1"></Form.Control>
            <Form.Control id="commHeadID"type="commHeadID"  placeholder="Enter New Head ID"className="bye1" ></Form.Control>
            <Button  onClick={ () => this.addComm(document.getElementById("commName").value
            ,document.getElementById("commHead").value , document.getElementById("commHeadID").value) }  className="primary">Submit</Button>      
            </dl>
      </ToggleDisplay>
     
      </div>
      
    );
  }
}
}

export default Committiee;
