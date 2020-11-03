import React from "react";

// Declaring the component and importing props from App.jsx
const Form = ({ inputText, setInputText, todos, setTodos }) => {
  // Set the value of the event target as inputText
  const inputTextHandler = (e) => {
    setInputText(e.target.value); // Use the even to set it's value with setInputText
  };

  const submitTodoHandler = (e) => {
    e.preventDefault(); // Prevent default beheavior of "submit" (reloading the page)
    // If todo is empty don't submit it to todo
    inputText === "" ? alert("Cannot submit empty todo") :
    setTodos(
        [...todos, // Add any other previous todos to the list
        // Any other todos will have this info, with inputText as the main text
        { text: inputText, completed: false, id: Math.random() * 1000 },
        ]
    );
    setInputText(""); // Reset the submit field to a empty string
    console.log("resetado");

  };

  // Render all the stuff
  return (
    <form>
      {/* When the input changes, run inputTextHandler to set inputText */}
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      {/* Prevent reloading the page by <submit> */}
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
