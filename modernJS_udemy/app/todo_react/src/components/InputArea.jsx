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
  
  //if incompleteTodos.length >= 5 ...
  // * Do not allow input new todo item.
  // * It shows a warning statement.
  let disabled = (incompleteTodos.length >= 5); 

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
      <>
        <div style={style}>
          <input disabled={disabled} placeholder="input ToDo" value={todoText} onChange={onChangeTodoText}/>
          <button disabled={disabled} onClick={() => onClickAdd()}>add</button>
        </div>
        {disabled && (<p style={{color: 'red'}}>A number of Todo Item has reached the upper limit.</p>)}
      </>
  );
}
