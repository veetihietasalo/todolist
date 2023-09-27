import React, { useState } from 'react';
import TodoTable from './TodoTable';  // Muista tuoda TodoTable

const TodoList = () => {
  const [todo, setTodo] = useState({ description: '', date: '' });
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((todo, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>Todolist Sovellus</h1>
      <div className="input-section">
        <label htmlFor="description">Description: </label>
        <input 
          type="text" 
          id="description" 
          name="description" 
          onChange={inputChanged} 
          value={todo.description} 
        />
      </div>
      <div className="input-section">
        <label htmlFor="date">Date: </label>
        <input 
          type="date" 
          id="date" 
          name="date" 
          onChange={inputChanged} 
          value={todo.date} 
        />
      </div>
      <button onClick={addTodo}>Add</button>
      <TodoTable todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default TodoList;
