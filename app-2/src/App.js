import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      array: ['check', 'one', 'two', 'three']
    }
  }


  render() {
    let arrayList = this.state.array.map((str, index) => {
      return (
        <p key={index}>{str}</p>
      );
    });
    return (
      <div className="App">
        <p>{arrayList}</p>
      </div>
    );
  }
}

export default App;
