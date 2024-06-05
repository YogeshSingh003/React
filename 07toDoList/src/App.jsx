import React, { useState } from "react";

function App() {
  const [data, setData] = useState("");
  const [todo, setTodo] = useState([]);
  console.log(data);
  const handleChange = (e) => {
    setData(e.target.value);
  };
  const handleSubmit = () => {
    if (data.trim() !== "") {
      setTodo([...todo, data]);
      setData("");
      console.log(todo);
    }
  };

  const handleRemove = (i) => {
    const filteredTodo = todo.filter((element, id) => {
      return i != id;
    });
    setTodo(filteredTodo);
  };

  return (
    <div>
      <input type="text" value={data} onChange={handleChange}></input>
      <button onClick={handleSubmit}>Add</button>
      {todo.length > 0 &&
        todo.map((t, index) => {
          return (
            <>
              <div key={index}>
                <span>{t}</span>
                <button onClick={() => handleRemove(index)}>Remove</button>
              </div>
            </>
          );
        })}
    </div>
  );
}

export default App;
