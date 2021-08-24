//Todo.js
import React from 'react';
// import { useState } from 'react';

function Todo ({todo, updateTodo}) {
   function toggleCompletion(todo) {
        todo.isCompleted = !todo.isCompleted;
        console.log('todo =>', todo);
   }
    return(
        <div>
        <input type="checkbox" 
        // checked={todo.isCompleted}
        onChange={toggleCompletion(todo)}
        checked= {todo.updateTodo}
        ></input>
        {todo.text}        
        </div>
    )
}

export default Todo