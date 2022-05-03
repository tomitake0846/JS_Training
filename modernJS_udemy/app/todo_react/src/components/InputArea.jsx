import React ,{useState} from 'react';
import "../styles.css";

const style = {
  backgroundColor: '#c1ffff',
  width: '400px',
  height: '30px',
  padding: '8px',
  margin: '8px',
  borderRadius: '8px',
}

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
      <div style={style}>
        <input placeholder="input ToDo" value={todoText} onChange={onChangeTodoText}/>
        <button onClick={() => onClickAdd()}>add</button>
      </div>
  );
}
