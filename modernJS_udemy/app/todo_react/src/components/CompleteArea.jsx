import React from 'react';

export const CompleteArea = (props) => {
  const {incompleteTodos,completeTodos,setIncompleteTodos,setCompletedTodos} = props;  

  const onClickUndo = (index) => {
    //add todo to incomplete-area
    const newIncompleteTodos = [...incompleteTodos,completeTodos[index]];
    setIncompleteTodos(newIncompleteTodos);

    //delete todo from complete-area
    const newCompletedTodos = [...completeTodos];
    newCompletedTodos.splice(index,1);
    setCompletedTodos(newCompletedTodos);
  }
  return (
    <div className="complete-area" >
      <p className="title"> completed-ToDo </p>
      <ul>
      {completeTodos.map((todoName,index) => {
          return (
            <div key={todoName} className="list-row">
              <li> {todoName} </li>
              <button onClick={() => onClickUndo(index)}>undo</button>
            </div>
          )
        })} 
      </ul>
    </div>
  );
}
