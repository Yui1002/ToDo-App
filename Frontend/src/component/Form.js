import React, { useState } from 'react';
import './Form.css'

const Form = ({setInput, setTodos, input, todos, setStatus}) => {
    const [error, setError] = useState(false)
    const [isEmpty, setIsEmpty] = useState(false)

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(input === '') {
            setIsEmpty(true)
            return
        }

        setIsEmpty(false)

        const userInput = {
            input: input,
            completed: false,
        }

        const response = await fetch('http://localhost:5000/checkUnique', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(userInput)
        })
        const data = await response.json();
        if(data.result === 0) {
            const response = await fetch('http://localhost:5000/addTodo', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userInput)
            })
            const data = await response.json()
            setTodos([...todos, {
                value: userInput.input, completed: userInput.completed
            }])
            setError(false)
        } else {
            setError(true)
        }

        setInput('');
        document.getElementById('todo-input').value = "";
    }

    const handleStatus = (e) => {
        setStatus(e.target.value)
    }

    const resetItems = async () => {
        setTodos(todos.splice())

        const response = await fetch('http://localhost:5000/deleteItems');
        const data = await response.json();
    }

    return (
        <div>
            <h1 className="todo-title">Yui's Todo List</h1>
            <div className="todo-upper">
                <form className="todo-form" onSubmit={handleSubmit}>
                    <input 
                        className="todo-input" 
                        type="text" 
                        name="todo" 
                        id="todo-input" 
                        value={input} 
                        onChange={handleChange}
                    />
                    <button className="todo-submit" type="submit">Add</button>
                </form>
                <div className="todo-select-container">
                    <select className="todo-select" onChange={handleStatus}>
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
                <button onClick={resetItems} className="todo-reset">Reset</button>
            </div>
            {error ? <div className="todo-error">This item is already added!</div> : <div></div>}
            {isEmpty ? <div className="todo-empty">Please write something</div> : <div></div>}
        </div>
    );
}
 
export default Form;