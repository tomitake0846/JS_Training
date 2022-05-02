import React from 'react';

export const IncompleteArea = (props) => {
  const {incompleteTodos,completeTodos,setIncompleteTodos,setCompletedTodos} = props;  
  
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index,1);
    setIncompleteTodos(newTodos);
  }

  const onClickComplete = (index) => {
    //add todo to complete-area
    const newTodos = [...completeTodos,incompleteTodos[index]];
    setCompletedTodos(newTodos);
    
    //delete todo from incomplete-area
    onClickDelete(index);
  }

  return (
    <div className="incomplete-area">
      <p className="title"> incompleted-ToDo </p>
      <ul>
      {incompleteTodos.map((todoName,index) => {
          return (
            <div key={todoName} className="list-row">
              <li> {todoName} </li>
              <button onClick={() => onClickComplete(index)}>done</button>
              <button onClick={() => onClickDelete(index)}>delete</button>
            </div>
          )
        })} 
      </ul>
    </div>
  )
}
