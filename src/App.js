import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";


const defaultTodos = [
  {
    text:'Cortar Cebolla',
    complete:false,
  },
  {
    text: 'elemento 2',
    complete: true,
  }
]


function App() {

  const [todos, setTodos] = React.useState(defaultTodos);
  /* REACT HOOKS */
  const [searchValue, setValue] = React.useState('');

  const completedTodos = todos.filter(todo=>!!todo.complete).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if(!searchValue.length>=1){
    searchedTodos = todos;
  }
  else{
    searchedTodos = todos.filter(todo=>{
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText);
    })
    
  }

  const completeTodos = (text) =>{
    const todoIndex = todos.findIndex(todo=> todo.text === text);
    const newTodos = [...todos];

    newTodos[todoIndex].complete = true;
    setTodos(newTodos);
  }

  const deleteTodo = (text )=>{
    const todoIndex = todos.findIndex(todo=> todo.text === text);
    const newTodos = [...todos];

    newTodos.splice(todoIndex,1);
    setTodos(newTodos);
  }

  return (
    <React.Fragment>      
      <div>
        <TodoCounter total={totalTodos} complete={completedTodos}/>      
        <TodoSearch searchValue={searchValue} setValue={setValue}/>
        <TodoList>
          {searchedTodos.map(todo => (<TodoItem key={todo.text} text={todo.text} complete={todo.complete} onDelete={()=>deleteTodo(todo.text)} onComplete={() => completeTodos(todo.text)}/>))}      
        </TodoList>
        <CreateTodoButton />
      </div>
      
    </React.Fragment>    
  );
}

export default App;
