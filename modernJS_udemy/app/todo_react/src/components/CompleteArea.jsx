import React from 'react';

const style = {
  backgroundColor:'#c6ffe2',
  width: '400px',
  minHeight: '200px',
  padding: '8px',
  margin: '8px',
  borderRadius: '8px',
}

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
    <div style={style}>
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
