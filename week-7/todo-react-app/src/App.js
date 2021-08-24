
import React from 'react';
import Todo from './components/Todo';
import { useState } from 'react';
import './App.css';

function App() {
  const [todos, sort, settodos] = 
     useState ([{text: 'Walk dog', isCompleted: false, createdAt: new Date()}, {text: 'Feed cat', isCompleted: false, createdAt: new Date()}])
    
  return (
    <div className="App">
        <h1>Todos</h1>
        <div>
        {/* todos.length checks that length is greater than 0, both conditions need to be true in order to run */}
          {todos.length &&
          //map is getting the key and props
            todos.map((todo, idx) => <Todo key={idx} todo={todo} updateTodo={settodos}/>)
            }
             <button
    onClick={() => ({ sort: sort === 'oldest' ? 'newest' : 'oldest' })
    }
  >
    ⬇️ Sort by {sort === 'oldest' ? 'newest' : 'oldest'} first
  </button>
        </div>
      </div>
    );
}

export default App;
