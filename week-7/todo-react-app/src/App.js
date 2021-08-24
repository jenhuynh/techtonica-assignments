import React from 'react';
import Todo from './components/Todo';
import { useState } from 'react';
import './App.css';

//So far the state looks correct, and you should see the button text update when it's pressed
// 1:43
// But you are not actually using sort anywhere else. The missing piece is actually sorting the list of todos before displaying it.
// 1:44
// So instead of todos.map it will be todos.somethingelse().map
// 1:44
// Check MDN and see if there is a method in arrays that you can use for sorting.
// 1:45
// Or maybe the tutorial you are following has a suggestion for that!
// 1:46
// (Because .sort doesn't return a sorted array, it sorts it in place :( )


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
