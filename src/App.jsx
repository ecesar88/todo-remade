import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  // Declaring the states
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  // Render stuff
  return (
    <div className="App">
      <h1>Ericks's todo!</h1>
      {/* Passing the props to Form */}
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
      />
      {/* Render todoList */}
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
