import React, { useState } from "react";

function App() {
  const [data, setData] = useState("");
  const [todo, setTodo] = useState([]);
  const handleChange = (e) => {
    setData(e.target.value);
  };
  const handleSubmit = () => {
    if (data.trim() !== "") {
      setTodo([...todo, data]);
      setData("");
    }
  };

  const handleRemove = (i) => {
    const filteredTodo = todo.filter((element, id) => {
      return id != i;
    });
    setTodo(filteredTodo);
  };

  return (
    <div>
      <input type="text" value={data} onChange={handleChange}></input>
      <button onClick={handleSubmit}>Add</button>
      {todo.length > 0 &&
        todo.map((t, index) => (
          <div key={index}>
            <span>{t}</span>
            <button onClick={() => handleRemove(index)}>Remove</button>
          </div>
        ))}
    </div>
  );
}

export default App;
