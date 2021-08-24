import React from 'react';
import Todo from './components/Todo';
import { useState } from 'react';
import './App.css';

function App() {
  const [todos, settodos] = 
     useState ([{text: 'Walk dog', isCompleted: false, createdAt: new Date()}, {text: 'Feed cat', isCompleted: false, createdAt: new Date()}])

  const [sort, setSort] = useState('oldest');
    
  return (
    <div className="App">
        <h1>Todos</h1>
        <div>
        {/* todos.length checks that length is greater than 0, both conditions need to be true in order to run */}
          {todos.length &&
          //map is getting the key and props
          todos.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime()).map((todo, idx) => <Todo key={idx} todo={todo} updateTodo={settodos} sort={setSort}/>)
            }
             <button onClick={() => setSort('oldest')}>
    ⬇️ Sort by { sort === 'oldest' ? 'newest' : 'oldest'} first
  </button>
        </div>
      </div>
    );
}

export default App;
