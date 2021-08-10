import React, { useState } from 'react';
import './Form.css'

const Form = ({setInput, setTodos, input, todos, setStatus, setIsReload}) => {
    const [error, setError] = useState(false)

    // ユーザがinput欄に入力したものを監視
    const handleChange = (e) => {
        setInput(e.target.value)
    }

    // 
    const handleSubmit = async (e) => {
        e.preventDefault();

        const userInput = {
            input: input,
            completed: false,
        }

        // ユーザが入力したアイテムが既にデータベースにないかを確認
        const response = await fetch('http://localhost:5000/checkUnique', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(userInput)
        })
        const data = await response.json();

        // ない場合はデータベースに追加
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
            // case1: unique(もう一度確認)
            setError(false)
        } else {
            // case2: duplicate
            setError(true)
        }

        // input欄をリセット
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
            </div>
            {error ? <div className="todo-error">This item is already added!</div> : <div></div>}
        </div>
    );
}
 
export default Form;