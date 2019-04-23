import React, { Component } from 'react';
import axios from 'axios'

class Library extends Component {
  
  constructor(){
    super()
    this.state = { libraries: [] }
    this.state.search = "search"
    axios.get("http://localhost:3000/api/documents").then( result => this.setState({ libraries: result.data }))
    this.onTextChanged = this.onTextChanged.bind(this)
    this.filteration = this.filteration.bind(this)
  }

  onTextChanged(event){
      this.setState({ search: event.target.value})
  }

  filteration(){
    const filter = this.state.search
    const filtered = this.state.libraries.filter(function(library) {
        return library.document.includes(filter)
    });
    this.setState({ libraries: filtered, search: filter})
  }

  helper(library){
    return (
        <div>
            <div> Name: {library.name} </div><br/>
            <div> Date: {library.date} </div><br/>
            <div> Type: {library.type} </div><br/>
            <div> Document: {library.document} </div>
        </div>
    )
  }

  render() {
    return (
      <div className="Library">
        <input type="text" value={this.state.search} onChange={this.onTextChanged}/>
        <button onClick={this.filteration}>
            Search
        </button>
        {this.state.libraries.map((library) => {
            return <li>{this.helper(library)}</li>
        })}
      </div>
    );
  }
}

export default Library;