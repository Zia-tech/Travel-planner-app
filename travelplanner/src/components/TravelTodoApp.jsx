import { useState } from "react";
import "../style/Travel.css";
import TodoItem from "./TodoItem";

const CATEGORIES = [
  { key: "before", label: "Before Trip" },
  { key: "during", label: "During Trip" },
  { key: "after", label: "After Trip" }
];

function TravelTodoApp() {
  const [todos, setTodos] = useState({
    before: [],
    during: [],
    after: []
  });
  const [task, setTask] = useState("");
  const [category, setCategory] = useState("before");

  const addTodo = (e) => {
    e?.preventDefault();
    if (task.trim() === "") return;

    setTodos({
      ...todos,
      [category]: [...todos[category], task.trim()]
    });
    setTask("");
  };

  const deleteTodo = (cat, index) => {
    const newTodos = todos[cat].filter((_, i) => i !== index);
    setTodos({ ...todos, [cat]: newTodos });
  };

  return (
    <div className="travel-app">
      <header className="travel-app__header">
        <h1>Todo App</h1>
      </header>

      <form className="todo-input" onSubmit={addTodo}>
        <div className="todo-input__field">
          <label className="todo-input__label" htmlFor="travel-task">
            Task
          </label>
          <input
            id="travel-task"
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a travel task..."
          />
        </div>

        <div className="todo-input__field">
          <label className="todo-input__label" htmlFor="travel-category">
            Category
          </label>
          <select
            id="travel-category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {CATEGORIES.map(({ key, label }) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="todo-input__submit">
          Add
        </button>
      </form>

      <div className="travel-app__sections">
        {CATEGORIES.map(({ key, label }) => (
          <section key={key} className="travel-app__section" aria-label={label}>
            <h2>{label}</h2>
            <ul className="todo-list">
              {todos[key].map((todo, index) => (
                <TodoItem
                  key={`${key}-${index}-${todo}`}
                  text={todo}
                  onDelete={() => deleteTodo(key, index)}
                />
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}

export default TravelTodoApp;
