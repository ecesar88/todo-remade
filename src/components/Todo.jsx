import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  // Filter only the todos that match el.id
  // to remove them from {todos} with setTodos()
  const deleteTodoHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
    console.log(todo);
  };

  const completedHandler = () => {
    setTodos(
      todos.map((item) => {
        // Map through todos and return the properties(...item)
        if (item.id === todo.id) {
          // but with completed: true if the todo i'm clicking on matches
          return {
            // the todo.id
            ...item,
            completed: !item.completed,
          }; // close if return
        } // close if
        return item; // if it doesnt matches, just return it to the new array unmodified
      })
    ); // otherwise we would have an empty array
  };

  return (
    <div className="todo">
      <li className={`'todo-item' ${todo.completed ? "completed" : ""}`}>{text}</li>
      <button onClick={completedHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>

      {/* deleteTodoHandler (12) */}
      <button onClick={deleteTodoHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
