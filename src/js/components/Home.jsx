import React, { useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      setTodos([...todos, inputValue.trim()]);
      setInputValue("");
    }
  };

  const removeTodo = (indexToRemove) => {
    setTodos(todos.filter((_, idx) => idx !== indexToRemove));
  };

  return (
    <div className="container">
      <h1>Todos:</h1>
      <ul>
        <li className="todo-item">
          <input
            type="text"
            placeholder="No tasks, add a task"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </li>
        {todos.map((item, index) => (
          <li key={index} className="todo-item">
            {item}
            <i
              className="delete-icon fa-solid fa-xmark"
              onClick={() => removeTodo(index)}
            ></i>
          </li>
        ))}
      </ul>
	  <div>{todos.length} item left</div>
    </div>
  );
};

export default Home;