//Todo.js
import React from "react";

//creating Todo component
function Todo({ todo, updateTodo }) {
  //destructing todo to keys of text, isCompleted
  const { text, isCompleted } = todo;
  function toggleCompletion() {
    //find this todo and apply the changes in the second argument
    updateTodo(todo, { isCompleted: !isCompleted, text: text.toUpperCase() });
  }
  return (
    <div>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={toggleCompletion}
      ></input>
      {text}
    </div>
  );
}

export default Todo;
