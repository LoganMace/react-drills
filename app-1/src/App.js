import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      input: ''
    }
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(e){
    this.setState({
      input: e.target.value
    })
  }


  render() {
    return (
      <div className="App">
        <input onChange={ this.handleInput }/>
        <p onChange={ this.handleInput }> {this.state.input} </p>
      </div>
    );
  }
}

export default App;
