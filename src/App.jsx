import { useState } from 'react';
import './index.css'

function TodoList() {
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
      <div className="input">
        <label htmlFor="description">Description: </label>
        <input type="text" id="description" name="description" onChange={inputChanged} value={todo.description} />
      </div>
      <div className="input">
        <label htmlFor="date">Date: </label>
        <input type="date" id="date" name="date" onChange={inputChanged} value={todo.date} />
      </div>
      <button onClick={addTodo}>Add</button>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            todos.map((todo, index) => (
              <tr key={index}>
                <td>{todo.description}</td>
                <td>{todo.date}</td>
                <td><button onClick={() => deleteTodo(index)}>Delete</button></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
        }
export default TodoList;

