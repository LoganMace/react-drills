import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      userInput: '',
      array: ['check', 'one', 'two', 'three', 'done']
    }
    this.handleUserInput=this.handleUserInput.bind(this)
  }


  handleUserInput(e){
    this.setState({
      userInput: e.target.value
    })
  }


  render() {

    let list = this.state.array.filter((str) => {
      return (
        str.includes(this.state.userInput)
      )
    }).map((str, index) => {
      return (
        <p key={index}> { str } </p>
      )
    })

    return (
      <div className="App">
        <input onChange={this.handleUserInput} />
        <h2> {list} </h2>
      </div>
    );
  }
}

export default App;
