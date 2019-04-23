import React, { Component } from 'react';
import axios from 'axios'

class Gallery extends Component {
  
    constructor(props){
        super(props)
        this.state = { gallery: [] }
        axios.get("http://localhost:3000/galleries/").then(response => this.setState({ gallery: response.data}))
    }

    looper(g){
        return (
            <div>
                <div>Title {g.title}</div><br/>
                <div>Description {g.description}</div><br/>
                <div>Image {g.image}</div>
            </div>
        )
    }

    render() {
    return (
      <div className="Gallery">
        {this.state.gallery.map((g) => {
            return <li>{this.looper(g)}</li>
        })}
      </div>
    );
  }
}

export default Gallery;