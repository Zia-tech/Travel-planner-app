import { useState } from "react";
import "../style/travel.css";
import TodoItem from "./TodoItem";

function TravelTodoApp() {
  const [todos, setTodos] = useState({
    before: [],
    during: [],
    after: []
  });
  const [task, setTask] = useState("");
  const [category, setCategory] = useState("before");

  const addTodo = () => {
    if (task.trim() !== "") {
      setTodos({
        ...todos,
        [category]: [...todos[category], task]
      });
      setTask("");
    }
  };

  const deleteTodo = (cat, index) => {
    const newTodos = todos[cat].filter((_, i) => i !== index);
    setTodos({ ...todos, [cat]: newTodos });
  };

  return (
    <div className="travel-app">
      <h1>Todo App</h1>
      <div className="todo-input">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a travel task..."
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="before">Before Trip</option>
          <option value="during">During Trip</option>
          <option value="after">After Trip</option>
        </select>
        <button onClick={addTodo}>Add</button>
      </div>

      <h2>Before Trip</h2>
      <ul className="todo-list">
        {todos.before.map((todo, index) => (
          <TodoItem
            key={index}
            text={todo}
            onDelete={() => deleteTodo("before", index)}
          />
        ))}
      </ul>

      <h2>During Trip</h2>
      <ul className="todo-list">
        {todos.during.map((todo, index) => (
          <TodoItem
            key={index}
            text={todo}
            onDelete={() => deleteTodo("during", index)}
          />
        ))}
      </ul>

      <h2>After Trip</h2>
      <ul className="todo-list">
        {todos.after.map((todo, index) => (
          <TodoItem
            key={index}
            text={todo}
            onDelete={() => deleteTodo("after", index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default TravelTodoApp;
