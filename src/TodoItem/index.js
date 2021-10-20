import React from "react";
import '../css/TodoItem.css';


function TodoItem(props){
    return(
        <li className="liItem">
            <span className="titleItem" onClick={props.onComplete}>C</span>
            <p className="textItem">{props.text}</p>
            <button className="buttonItem" onClick={props.onDelete}>x</button>
        </li>
    );
}

export {TodoItem};