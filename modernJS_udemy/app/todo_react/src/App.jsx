import React, {useState} from 'react';
import {InputArea} from './components/InputArea';
import {IncompleteArea} from './components/IncompleteArea';
import {CompleteArea} from './components/CompleteArea'
import "./styles.css";

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState(['test','sample']);
  const [completeTodos, setCompletedTodos] = useState(['misc']); 
 
  return (
    <>
      <InputArea incompleteTodos={incompleteTodos} setIncompleteTodos={setIncompleteTodos}/>
      <IncompleteArea incompleteTodos={incompleteTodos} setIncompleteTodos={setIncompleteTodos} completeTodos={completeTodos} setCompletedTodos={setCompletedTodos}/>
      <CompleteArea incompleteTodos={incompleteTodos} setIncompleteTodos={setIncompleteTodos} completeTodos={completeTodos} setCompletedTodos={setCompletedTodos}/>
    </>
  );
}
