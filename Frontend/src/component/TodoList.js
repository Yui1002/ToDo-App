import React from 'react';
import Todo from './Todo'
import './TodoList.css'

const TodoList = ({todos, setTodos, filteredTodos}) => {

    return (
        <div>
            <ul className="todo-list-container">
                {filteredTodos.map((item) => (
                    <Todo item={item} key={item.id} setTodos={setTodos} todos={todos} />
                ))}
            </ul>
        </div>
    );
}
 
export default TodoList;
