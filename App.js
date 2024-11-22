import React, { useState } from "react";
import "./App.css";
import Todo from "./Todo";

function App() {
  const [todos, setTodos] = useState([]); // To-Do items
  const [input, setInput] = useState(""); // Input field state

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]); // Add new item to the list
      setInput(""); // Clear input field
    }
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index)); // Remove item by index
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <Todo key={index} text={todo} onDelete={() => removeTodo(index)} />
        ))}
      </ul>
    </div>
  );
}

export default App;
