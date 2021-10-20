import React from "react";
import '../css/CreateTodoButton.css'

function CreateTodoButton(props){
    const onClickButton = () => {
        props.setOpenModal(prevState =>!prevState);
    }

    return(
        <button 
        className="buttonCreateTodo"
        onClick={onClickButton}
        >
            +
        </button>
    );
}

export {CreateTodoButton};