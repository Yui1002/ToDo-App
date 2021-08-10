import React from 'react';
import './Todo.css'

const Todos = ({item, setTodos, todos}) => {

    const handleDelete = (e) => {
        const result = todos.filter(todo => todo.value !== item.value)
        setTodos(result)
    }

    const handleCompleted = (e) => {
        setTodos(
            todos.map((todo) => {
                if(todo.value === item.value) {
                    return {
                        ...todo, completed: 1
                    }
                }
                return todo
            })
        )

        const result = {
            input: item.value
        }
        
        fetch('http://localhost:3000/chageStatusToDone', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(result)
        })
        .then(() => {
            console.log('get done')
        })
    }
    return (
        <li key={item.value} 
            className={`todo-item ${item.completed ? 'todo-completed' : ''}`}>
            <span className="todo-content">{item.value}</span>
            <button 
                className="todo-check"
                value={item.value} 
                onClick={handleCompleted}>
                <i className="fas fa-check"></i>
            </button>
            <button 
                className="todo-delete"
                value={item.value} 
                onClick={handleDelete}>
                <i className="fas fa-trash"></i>
            </button>
        </li>
    );
}
 
export default Todos;