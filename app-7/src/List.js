import React from 'react';
import Todo from './Todo.js';

export default function List(props){
  let list = props.array.map((task, index) => {
    return(
      <Todo key={index} task={task} />
    )
  })
  return(
    <div>{list}</div>
  )
}