import React, { Component } from 'react';
import './App.css';
import Image from './Image.js'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Image testImage='http://via.placeholder.com/350x150'/>
      </div>
    );
  }
}

export default App;
