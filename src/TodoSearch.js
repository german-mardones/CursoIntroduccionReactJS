import React from "react";
import './css/TodoSearch.css';

function TodoSearch({searchValue, setValue }){

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