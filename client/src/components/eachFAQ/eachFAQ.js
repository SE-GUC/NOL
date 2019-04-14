
import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

//import './profile.css';


class eachFAQ extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      faqs: [],
      show_head:false,
      show_comm:false

    }
  }
  componentDidMount(){
    fetch(`http://localhost:3000/faq/${this.props.match.params.id}`).then(res=>res.json())
    .then(comm=>this.setState({faqs:comm.data,is_loading:false}))
    
  }

  

  answerQ(x,y){
    fetch('http://localhost:3000/faq/'+x+'/update', 
      { method: 'PUT' ,
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify({answer:y})
    }).then(response => response.json())
    this.render();

  }


  deleteQues(x){
    fetch('http://localhost:3000/faq/'+x+'/delete', 
    { method: 'DELETE' ,
    headers:{'Content-Type': 'application/json'}})
  .then(response => response.json())
 //this.render();
  }  

  render() {
    const {faqs}=this.state;
    return (
     
      
     
     <div className="App">
     
    
     <Jumbotron>
      
      <h1>Question</h1>
      <hr></hr>
     
      
      <p className="text1">Question:</p>
      <p className="text2">{faqs.question}</p>
      
        <br></br>
        
      <p className="text1">Answer:</p>
      <p className="text2">{faqs.answer}</p>
      
      <br></br>
      
            <dl>
            <Form.Control id="ans"type="headName"  placeholder="Enter Answer"></Form.Control>
            <Button  onClick={ () => this.answerQ(faqs._id,document.getElementById("ans").value) }  className="primary">Submit</Button>      
            </dl>
      
      

     { <p>

     <br></br>
     <Button  onClick={ () => this.deleteQues(faqs._id) }  variant="danger">Delete Question</Button>
     </p> }
      
      </Jumbotron>
      </div>
      
    );
  }
}

export default eachFAQ;
