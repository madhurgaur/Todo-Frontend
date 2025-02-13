import { useState } from "react";
import "./Createtodo.css";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  return (
    <div className="todo-form-container">
      <input
        type="text"
        className="todo-input"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <input
        type="text"
        className="todo-input"
        placeholder="Description"
        onChange={(e) => setDesc(e.target.value)}
      />
      <br />
      <button
        className="todo-button"
        onClick={() =>
          fetch("https://todo-backend-redt.onrender.com/todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: desc,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then(async (res) => {
              const json = await res.json();
              console.log(json);
              alert("Todo added");
            })
            .catch((err) => console.error("Error:", err))
        }
      >
        Add a Todo
      </button>
    </div>
  );
}
