import React, { Component } from 'react';

import './App.css';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      subscriptions: [],
      Redirect:false
    }
  }
  componentDidMount(){
    fetch('http://localhost:5000/subscription/').then(res=>res.json())
    .then(subscription=>this.setState({subscriptions:subscription.data}))
    
  }

  
  handleClick() {
    this.setState({
      show: !this.state.show
    });
  }






  render() {
    //const {faqs}=this.state;
    return (
     
      
     
     <div className="App">
     
    
     <ul>
        {this.state.subscriptions.map(subscription=>
        <li key={subscription._id}>{subscription.answer}
        <Button>Show more details</Button>
        <br></br>

        </li>)
        }
      </ul>
      </div>
      
    );
  }
}

export default App;
