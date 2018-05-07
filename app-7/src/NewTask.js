import React, {Component} from 'react';

class NewTask extends Component{

  constructor(){
    super();
    this.state = {
      userInput: ''
    }
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleUserInput(e){
    this.setState({
      userInput: e.target.value
    })
  }

    handleClick(){
      this.props.add(this.state.userInput)
    }


  render(){
    return(
      <div>
        <input onChange={this.handleUserInput}/>
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}

export default NewTask;