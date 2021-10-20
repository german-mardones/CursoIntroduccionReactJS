import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import {Modal} from "../Modal"
import {TodoForm} from "../TodoForm"

function AppUI() {
    const { error, loading, searchedTodos, completeTodos, deleteTodo, openModal, setOpenModal } = React.useContext(TodoContext);
    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {error && <p>Error</p>}
                {loading && <p>Estamos cargando</p>}
                {(!loading && !searchedTodos.length) && <p>Crea tu primer To Do!</p>}
                {searchedTodos.map(todo => (<TodoItem key={todo.text} text={todo.text} complete={todo.complete} onDelete={() => deleteTodo(todo.text)} onComplete={() => completeTodos(todo.text)} />))}
            </TodoList>
            
            {!!openModal && (
                <Modal>
                    <TodoForm/>
                </Modal>
            )}
            <CreateTodoButton setOpenModal={setOpenModal} />
        </React.Fragment>
    );
}

export { AppUI };