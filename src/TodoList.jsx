import React, { useState } from 'react';
import TodoTable from './TodoTable';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import './App.css';

const TodoList = () => {
  const [todo, setTodo] = useState({ description: '', date: null });
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const dateChanged = (newDate) => {
    setTodo({ ...todo, date: newDate });
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
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="input-section">
          <label htmlFor="date">Date: </label>
          <DatePicker
            label="Date"
            value={todo.date}
            onChange={dateChanged}
          />
        </div>
      </LocalizationProvider>
      <button onClick={addTodo}>Add</button>
      <TodoTable todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default TodoList;
