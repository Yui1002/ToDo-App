import React, {useState, useEffect} from 'react';
import './App.css'
import Form from './component/Form'
import TodoList from './component/TodoList'


const App = () => {
  
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])
  
  
  useEffect(() => {
    const handleFilter = () => {
      switch(status) {
        case 'completed':
          setFilteredTodos(todos.filter(todo => todo.completed === true))
          break;
          case 'uncompleted': 
          setFilteredTodos(todos.filter(todo => todo.completed === false))
          break;
          default: 
          setFilteredTodos(todos)
        }
      }
    handleFilter();
  }, [todos, status])

  return (
    <div className="app-container">
      <Form 
        setInput={setInput}
        setTodos={setTodos}
        input={input}
        todos={todos}
        setStatus={setStatus}
        />
      <TodoList 
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}
 
export default App;