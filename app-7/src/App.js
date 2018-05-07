import React, { Component } from 'react';
import './App.css';
import NewTask from './NewTask';
import List from './List.js';

class App extends Component {

  constructor(){
    super();
    this.state = {
      array: ['sweep']
    }
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(task){
    this.setState({ array: [ ...this.state.array, task ] });
  }

  render() {
    return (
      <div className="App">
        <h1>To-do List:</h1>
        <NewTask add={this.handleAdd}/>
        <List array={this.state.array}/>
      </div>
    );
  }
}

export default App;
