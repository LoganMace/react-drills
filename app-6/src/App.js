import React, { Component } from 'react';
import './App.css';
import Todo from './Todo.js';

class App extends Component {

  constructor(){
    super();
    this.state = {
      userInput: '',
      array: []
    }
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleUserInput(e){
    this.setState({
      userInput: e.target.value
    });
  }

  handleClick(){
    let newArr = this.state.array.slice();
    newArr.push(this.state.userInput);
    this.setState({
      array: newArr
    });
  }


  render() {

    let list = this.state.array.map((str, input) => {
      return (
        <Todo key={input} task={str} />
      )
    })

    return (
      <div className="App">
        <h1>To-do List:</h1>
        <input onChange={this.handleUserInput}/>
        <button onClick={this.handleClick}>Add</button>
        <div>{list}</div>
      </div>
    );
  }
}

export default App;
