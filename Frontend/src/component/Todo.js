import React from 'react';
import './Todo.css'

const Todos = ({item, setTodos, todos}) => {

    const handleDelete = (e) => {
        const result = todos.filter(todo => todo.value !== e.target.value)
        setTodos(result)
    }

    const handleDone = (e) => {
        setTodos(
            todos.map((todo) => {
                if(todo.value === e.target.value) {
                    return {
                        ...todo, completed: true
                    }
                }
                return todo
            })
        )
    }

    return (
        <li key={item.id} 
            className={`todo-item ${item.completed ? 'todo-done' : ''}`}>
            <span className="todo-content">{item.value}</span>
            <button 
                className="todo-check"
                value={item.value} 
                onClick={handleDone}>
                <i class="fas fa-check"></i>
                </button>
            <button 
                className="todo-delete"
                value={item.value} 
                onClick={handleDelete}>
                <i class="fas fa-trash"></i>
            </button>
        </li>
    );
}
 
export default Todos;