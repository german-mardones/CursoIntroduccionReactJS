import React from "react";
import './css/CreateTodoButton.css'

function CreateTodoButton(props){
    const onClickButton = (msg) => {
        console.log(msg)
    }

    return(
        <button 
        className="buttonCreateTodo"
        onClick={() => onClickButton('Clik')}
        >
            +
        </button>
    );
}

export {CreateTodoButton};