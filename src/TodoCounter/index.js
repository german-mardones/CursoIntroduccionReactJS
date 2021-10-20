import React from "react";
import '../css/TodoCounter.css';
import logo from '../assets/img/todo_logo.png';
import { TodoContext } from "../TodoContext";


function TodoCounter(){
    const {totalTodos,completedTodos} = React.useContext(TodoContext);
    return(
        <React.Fragment> 
            <h1 className="titleCounter"> <img className="imageCounter" src={logo} alt="Logo" /> Bienvenido</h1>            
            <h2 className="subTitleCounter">Has completado {completedTodos} de {totalTodos} TO DO's</h2>
        </React.Fragment>
    );
}

export {TodoCounter};