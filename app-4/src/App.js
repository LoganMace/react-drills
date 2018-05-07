import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      userName: '',
      password: ''
    }
    this.handleUserName = this.handleUserName.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleUserName(e){
    this.setState({
      userName: e.target.value
    })
  }

  handlePassword(e){
    this.setState({
      password: e.target.value
    })
  }

  handleLogin(){
    alert ('Username: ' + this.state.userName + ' Password: ' + this.state.password)
  }

  render() {
    return (
      <div className="App">
        <input onChange={ this.handleUserName }/>
        <input onChange={ this.handlePassword }/>
        <button onClick={ this.handleLogin }>Login</button>
      </div>
    );
  }
}

export default App;
