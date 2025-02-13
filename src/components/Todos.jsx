import "./Todos.css";

export function Todos({ todos }) {
  return (
    <div className="todos-container">
      {todos.map((todo) => (
        <div key={todo.id} className="todo-item">
          <h1>{todo.title}</h1>
          <h2>{todo.description}</h2>
          <button>{todo.completed ? "Completed" : "Mark As Complete"}</button>
        </div>
      ))}
    </div>
  );
}
