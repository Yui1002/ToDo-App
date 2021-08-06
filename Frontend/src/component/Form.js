import React from 'react';
import './Form.css'

const Form = ({setInput, setTodos, input, todos, setStatus}) => {

    // track user's input
    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos([...todos, {
            value: input, completed: false, id: Math.random() * 10
        }])

        const result = {
            input: input,
            completed: false,
        }

        fetch('http://localhost:3000/addTodo', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(result)
        }).then(() => {
            console.log('new todo added')
        })

        setInput('');
        document.getElementById('todo-input').value = "";
    }

    // check status (All/Completed/Uncompleted)
    const handleStatus = (e) => {
        setStatus(e.target.value)
    }

    return (
        <div>
            <h1 className="todo-title">Yui's Todo List</h1>
            <div className="todo-upper">
                <form className="todo-form" onSubmit={handleSubmit}>
                    <input className="todo-input" type="text" name="todo" id="todo-input" value={input} onChange={handleChange}/>
                    <button className="todo-submit" type="submit">Add</button>
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