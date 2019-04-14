
import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button';
import ToggleDisplay from 'react-toggle-display';
import Form from 'react-bootstrap/Form';


//import './profile.css';


class eachSubdomain extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      subdomains: [],
      show_name:false,
      show_desc:false

    }
  }
  componentDidMount(){
    fetch(`http://localhost:3000/subdomain/${this.props.match.params.id}`).then(res=>res.json())
    .then(su=>this.setState({subdomains:su.data,is_loading:false}))
    
  }

  showName(){
    this.setState({show_name:true});
  }

  showDesc(){
    this.setState({show_desc:true});
  }


  editName(x,y){
    fetch('http://localhost:3000/subdomain/update/'+x, 
      { method: 'PUT' ,
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify({name:y})
    }).then(response => response.json())
    //this.render();

  }
  editDesc(x,y){
    fetch('http://localhost:3000/subdomain/update/'+x, 
      { method: 'PUT' ,
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify({description:y})
    }).then(response => response.json())
  }


  deleteSub(x){
    fetch('http://localhost:3000/subdomain/delete/'+x, 
      { method: 'DELETE' ,
      headers:{'Content-Type': 'application/json'}})
    .then(response => response.json())
 
  }  

  render() {
    const {subdomains}=this.state;
    return (
     
      
     
     <div className="App">
     
    
     <Jumbotron>
      
      <h1>Subdomain</h1>
      <hr></hr>
     
      
      <p className="text1">Name:</p>
      <p className="text2">{subdomains.name}</p>
      
        <br></br>
        
      <ToggleDisplay if={this.state.show_name}>
            <dl>
            <Form.Control id="name"type="sname"  placeholder="Enter New Subdomain Name Here"></Form.Control><br></br>
            <Button  onClick={ () => this.editName(subdomains._id,document.getElementById("name").value) }  className="primary">Submit</Button>      
            </dl>
      </ToggleDisplay>
      <br></br>
        
      <p className="text1">Description:</p>
      <p className="text2">{subdomains.description}</p>
      
      <br></br>
      <ToggleDisplay if={this.state.show_desc}>
            <dl>
            <Form.Control id="desc"type="sdesc"  placeholder="Enter New Description Here"></Form.Control><br></br>
            <Button  onClick={ () => this.editDesc(subdomains._id,document.getElementById("desc").value) }  className="primary">Submit</Button>      
            </dl>
      </ToggleDisplay>
      


     { <p>
     <Button  onClick={ () => this.showName() }  className="primary">Edit Name</Button>
     <br></br>
     <br></br>
     <Button  onClick={ () => this.showDesc() }  className="primary">Edit Description</Button>
     <br></br>
     <br></br>
     <Button  onClick={ () => this.deleteSub(subdomains._id) }  variant="danger">Delete Subdomain</Button>
     </p> }
      
      </Jumbotron>
      </div>
      
    );
  }
}

export default eachSubdomain;
