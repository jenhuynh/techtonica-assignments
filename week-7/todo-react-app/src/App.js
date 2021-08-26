import React from "react";
import Todo from "./components/Todo";
import { useState } from "react";
import "./App.css";

const INITIAL_TODOS = [
  {
    text: "Walk dog",
    isCompleted: false,
    createdAt: new Date("December 17, 1995 03:24:00"),
  },
  {
    text: "Feed cat",
    isCompleted: true,
    createdAt: new Date(),
  },
];

function App() {
  const [todos, setTodos] = useState(INITIAL_TODOS);
  //existing will loop through all of the todos
  //if it is the one that has changes, it will merge with existing
  function updateTodo(todo, changes) {
    setTodos(
      todos.map((existing) => {
        //if it sees the specific todo we passed
        if (todo === existing) {
          //it will merge the changes to the exisiting
          return { ...existing, ...changes };
        }
        //it will return the existing todos if it's false
        return existing;
      })
    );
  }

  const [sort, setSort] = useState("oldest");

  if (sort === "oldest") {
    todos.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
  } else if (sort === "newest") {
    todos.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  return (
    <div className="App">
      <h1>Todos</h1>
      <div>
        {/* todos.length checks that length is greater than 0, both conditions need to be true in order to run */}
        {todos.length &&
          //map is getting the key and props
          todos.map((todo, idx) => (
            <Todo
              key={idx}
              todo={todo}
              updateTodo={updateTodo}
              sort={setSort}
            />
          ))}
        <button
          onClick={() => setSort(sort === "oldest" ? "newest" : "oldest")}
        >
          ⬇️ Sort by {sort === "oldest" ? "newest" : "oldest"} first
        </button>
      </div>
    </div>
  );
}

export default App;
