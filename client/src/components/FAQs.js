import React, { Component } from 'react';
//import { Redirect } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import ToggleDisplay from 'react-toggle-display';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

import './FAQs.css';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      
      faqs: [],
      Redirect:false,
      
      answer:[],
      finalAns:''
    }
  }
  componentDidMount(){
    fetch('http://localhost:3000/faq/').then(res=>res.json())
    .then(faq=>this.setState({faqs:faq.data,answer:faq.data.answer}))
    
  }
  
  
  handleClick(x,y) {
    
    console.log(y)
   fetch('http://localhost:3000/faq/'+x+'/update', 
      { method: 'PUT' ,
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify({answer:y})
    }).then(response => response.json())
    this.render();
  }

  addQuest(x){
    fetch('http://localhost:3000/faq/create', 
    { method: 'POST' ,
    headers:{'Content-Type': 'application/json'},
    body:JSON.stringify({question:x})
  }).then(response => response.json())
  //this.render();
  }
  deleteQues(x){
    fetch('http://localhost:3000/faq/'+x+'/delete', 
      { method: 'DELETE' ,
      headers:{'Content-Type': 'application/json'}})
    .then(response => response.json())
   //this.render();
  }
  

  



  render() {
    
    return (
     
      
     
     <div className="App">
     
      <h1>FAQs</h1>
      <hr></hr>
      <h2>Questions</h2>
     
        {this.state.faqs.map(faq=>
        <div> 
           
         <Card class="ques" key={faq._id}> 
           <Card.Title>{faq.question} </Card.Title>
            
             <ul> {faq.answer.map(a=><li key={a._id}>{a}</li>)}</ul><br></br> 
          
          <br></br>
          
        <Form.Control id="ans"type="answer"  placeholder="Enter Your Answer"></Form.Control>
        <Button onClick={ () => this.handleClick(faq._id,document.getElementById("ans").value) }>Answer</Button>
        <Button onClick={ () => this.deleteQues(faq._id)}>Delete</Button>
        </Card>
        <br></br>
        <br></br>

        </div>)
        }
        <div>
        <Form.Control id="ques"type="question"  placeholder="Add a question"></Form.Control>
        <Button onClick={ () => this.addQuest(document.getElementById("ques").value) }>Add</Button>
        </div>
        
        
      
      </div>
      
    );
  }
}

export default App;
