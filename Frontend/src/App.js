import React, {useState, useEffect} from 'react';
import './App.css'
import Form from './component/Form'
import TodoList from './component/TodoList'

const App = () => {
  
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])
  const [isReload, setIsReload] = useState(false)

  // const getAllItems = async () => {
  //   const response = await fetch('http://localhost:5000/getAllTodo');
  //   const data = await response.json()

  //   console.log(data)

  //   for(let i = 0; i < data.result.length; i++) {
  //     todos.push(data.result[i])
  //   }
  //   setTodos(todos)
  // }


  useEffect(() => {
    const handleFilter = () => {
      switch(status) {
        case 'completed':
          setFilteredTodos(todos.filter(todo => todo.completed === 1 || todo.completed === true))
          break;
          case 'uncompleted': 
          setFilteredTodos(todos.filter(todo => todo.completed === 0 || todo.completed === false))
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
        setIsReload={setIsReload}
        />
      
      <TodoList 
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
        isReload={isReload}
        setIsReload={setIsReload}
      />
    </div>
  );
}
 
export default App;