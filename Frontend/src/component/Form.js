import React from 'react';
import './Form.css'

const Form = ({setInput, setTodos, input, todos, setStatus}) => {

    // track user's input
    const handleChange = (e) => {
        setInput(e.target.value)
    }

    // update todo list
    const handleClick = (e) => {
        e.preventDefault()
        setTodos([...todos, {
            value: input, completed: false, id: Math.random() * 10
        }])

        setInput('')
        document.getElementById('todo-input').value = ""
    }

    // check status (All/Completed/Uncompleted)
    const handleStatus = (e) => {
        setStatus(e.target.value)
    }

    return (
        <div>
            <h1 className="todo-title">Yui's Todo List</h1>
            <div className="todo-upper">
                <form className="todo-form">
                    <input className="todo-input" type="text" name="todo" id="todo-input" onChange={handleChange}/>
                    <button className="todo-submit" type="submit" onClick={handleClick}>Add</button>
                </form>
                <div className="todo-select-container">
                    <select className="todo-select" onChange={handleStatus}>
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </div>
        </div>
    );
}
 
export default Form;