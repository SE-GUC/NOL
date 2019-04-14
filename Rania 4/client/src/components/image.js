import React, { Component } from 'react';

class Image extends Component {
  
    render() {
    
    return (
      <div className="Image">
        <image src={this.props.url}/>
      </div>
    );
  }
}

export default Image;
