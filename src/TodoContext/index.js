import React from "react";
import {useLocalStorage} from './useLocalStorage.js';

const TodoContext = React.createContext();


function TodoProvider(props){
    /* LLAMADA AL REACT HOOK */
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1',[]);

    //ESTADOS DEL SEARCH
    const [searchValue, setValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

    //CUENTA LOS ARREGLOS PARA COMPLETAR EL TITULO
    const completedTodos = todos.filter(todo=>!!todo.complete).length;
    const totalTodos = todos.length;

    let searchedTodos = [];

    if (!searchValue.length >= 1) {
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter(todo => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
        });
    }

    //FUNCION ADD
    const addTodo = (text) =>{
        const newTodos = [...todos];
        newTodos.push({
            completed: false,
            text,
        })
        saveTodos(newTodos);
    }

    //FUNCION COMPLETE
    const completeTodos = (text) =>{
        const todoIndex = todos.findIndex(todo=> todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].complete = true;
        saveTodos(newTodos);
    }

    //FUNCION DELETE
    const deleteTodo = (text )=>{
        const todoIndex = todos.findIndex(todo=> todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex,1);
        saveTodos(newTodos);
    }
    return(
        <TodoContext.Provider value={{
            error, 
            loading,
            totalTodos,
            completedTodos,
            searchValue,
            setValue,
            searchedTodos,
            completeTodos,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo,
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export {TodoContext, TodoProvider}