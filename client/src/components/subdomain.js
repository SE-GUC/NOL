import React, { Component } from 'react';
//import { Redirect } from 'react-router-dom'
//import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button';
import { Redirect } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ToggleDisplay from 'react-toggle-display';
import Form from 'react-bootstrap/Form';
import Jumbotron from 'react-bootstrap/Jumbotron';
//import Card from 'react-bootstrap/Card';

//import './profile.css';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {

      subdomains: [],
      redirect:false,
      show_name:false,
      show_desc:false,
      subdomain_ID:null

    }
  }

  showDesc(){
    this.setState({show_desc:true});
  }
  showName(){
    this.setState({show_name:true});
  }


  componentDidMount(){
    fetch('http://localhost:3000/subdomain/getallsubdomains').then(res=>res.json())
    .then(subdomain=>this.setState({subdomains:subdomain.data}))
    
  }
  
  addSub(x,y){
    fetch('http://localhost:3000/subdomain/create', 
    { method: 'POST' ,
    headers:{'Content-Type': 'application/json'},
    body:JSON.stringify({name:x, description:y})
  }).then(response => response.json())
  //this.render();
  }

  viewSub(x){
    this.setState({redirect:true,subdomain_ID:x});
  }

  deleteSub(x){
    fetch('http://localhost:3000/subdomain/delete/'+x, 
      { method: 'DELETE' ,
      headers:{'Content-Type': 'application/json'}})
    .then(response => response.json())
 
  } 
  showSub(){
    this.setState({show_name:true});
    this.setState({show_desc:true});
  }

  
  

  render() {
    //const {subdomains}=this.state;
    if(this.state.redirect){
        const path = `/subdomain/${this.state.subdomain_ID}`
        return <Redirect to={path}/>;
      }
    
      else{
    return (
    
      
     
        <div className="subdomains">
        <br></br>
        <h2>Subdomains</h2>
        <br></br>
        

     <Jumbotron>
     {this.state.subdomains.map(su=>
     <div> 
        <Card class="su" style={{ width: '18rem' }} key={su._id}> 
        <Card.Body>
          <Card.Title>{su.name}</Card.Title>

          <Button  onClick={ () => this.viewSub(su._id)}>View</Button>
          <Button  variant="danger" onClick={ () => this.deleteSub(su._id) } >Delete Subdomain</Button>
        </Card.Body>
      </Card>
       <br></br>
       </div>
     )}

       <div>
        <Button variant="primary" onClick={ () => this.showSub() }>Add a New Subdomain</Button><br></br><br></br>
        <ToggleDisplay if={this.state.show_desc}>
            <dl>
            <Form.Control id="name"type="sname"  placeholder="Add Subdomain Name"></Form.Control><br></br>
            <Form.Control id="desc"type="sdesc"  placeholder="Add Subdomain Description"></Form.Control><br></br>
            <Button  onClick={ () => this.addSub(document.getElementById("name").value, document.getElementById("desc").value) }  className="primary">Add</Button>      
            </dl>
        </ToggleDisplay>
      
        </div>
        </Jumbotron>
     
      </div>
         
      
    );
  }
}
}


export default App;
