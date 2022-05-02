import React ,{useState} from 'react';
import "../styles.css";

export const InputArea = (props) => {
  const {incompleteTodos,setIncompleteTodos} = props;
  const [todoText,setTodoText] = useState('');
  
  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };
  
  const onClickAdd = () => {
    if(todoText === '') return;
    const newTodos = [...incompleteTodos,todoText];
    setIncompleteTodos(newTodos);
    setTodoText('');
  }

  return (
      <div className="input-area">
        <input placeholder="input ToDo" value={todoText} onChange={onChangeTodoText}/>
        <button onClick={() => onClickAdd()}>add</button>
      </div>
  );
}
