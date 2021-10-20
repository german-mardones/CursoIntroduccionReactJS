import React from "react";
import '../css/TodoSearch.css';
import { TodoContext } from "../TodoContext";

function TodoSearch(){

    const {searchValue, setValue } = React.useContext(TodoContext);
    
    const onSearchValueChange =(event) => {
        console.log(event.target.value);
        setValue(event.target.value);
    }
    return(
        <input 
            className="inputSearch" 
            placeholder="Cebolla" 
            value={searchValue}
            onChange={onSearchValueChange}
        />
    );
}

export {TodoSearch};