import React, { Component } from 'react';
import "./Square.css";

class Square extends Component {
  render() {
    return (
      <button className='square' onClick={() => this.setState({ value: 'X' })}>
        {this.props.value}
      </button>
    );
  }
}

export default Square;