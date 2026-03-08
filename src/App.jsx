import { useState } from "react";
import './App.css'

function App() {


    const [task , setTask] = useState("");
    const [todos , setTodos] = useState([]);

    function handleClick() {
        if(task.trim() === ""){
            alert("please type the task first")
            return;
        }

        const arr = [...todos , task];
        setTodos(arr);
        setTask("");
    }

    function handleKeyPress(e) {
        if(e.key === "Enter"){
            handleClick();
        }
    }

    function handleDelete(index) {
        const newTodos = todos.filter((item , i) => i !== index);
        setTodos(newTodos);
    }

    function handleChange(e) {
        setTask(e.target.value);
    }

    return (
        <>
<div className="container">
  <h1>Your To Do</h1>

  <div className="input-section">
    <input
      type="text"
      placeholder="Add new task"
      value={task}
      onChange={handleChange}
      onKeyDown={handleKeyPress}
    />

    <button onClick={handleClick}>+</button>
  </div>

  <ul>
    {todos.map((item, index) => (
      <li key={index}>
        {item}
        <button onClick={() => handleDelete(index)}>Delete</button>
      </li>
    ))}
  </ul>
</div>
        </>
    )
}

export default App;