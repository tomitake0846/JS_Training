import React, {useState,useEffect} from 'react';
import {InputArea} from './components/InputArea';
import "./styles.css";

export const App = () => {
  const [todoText,setTodoText] = useState('');
  const [incompleteTodos, setIncompleteTodos] = useState(['test','sample']);
  const [completeTodos, setCompletedTodos] = useState(['misc']);

  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };
  const onClickAdd = () => {
    if(todoText === '') return;
    const newTodos = [...incompleteTodos,todoText];
    setIncompleteTodos(newTodos);
    setTodoText('');
  }
  
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
    <>
      <div className="input-area">
        <input placeholder="input ToDo" value={todoText} onChange={onChangeTodoText}/>
        <button onClick={() => onClickAdd()}>add</button>
      </div>

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
    </>
  );
}
