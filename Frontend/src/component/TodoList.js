import React from 'react';
import Todo from './Todo'
import './TodoList.css'

const TodoList = ({todos, setTodos, filteredTodos}) => {

    return (
        <div>
            <ul className="todo-list-container">
                {filteredTodos.map((item) => (
                    <Todo 
                        key={item.value} 
                        item={item}
                        todos={todos}
                        setTodos={setTodos} 
                    />
                ))}
            </ul>
        </div>
    );
}
 
export default TodoList;
