import React from "react";
import './css/TodoCounter.css';
import logo from './assets/img/todo_logo.png';


function TodoCounter({total,complete}){
    return(
        <React.Fragment> 
            <h1 className="titleCounter"> <img className="imageCounter" src={logo} alt="Logo" /> Bienvenido</h1>            
            <h2 className="subTitleCounter">Has completado {complete} de {total} TO DO's</h2>
        </React.Fragment>
    );
}

export {TodoCounter};