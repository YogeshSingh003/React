import React, { useState } from "react";

function App() {
  const [arr, setArr] = useState([]);

  function addItem() {
    setArr([...arr, { value: "rammm" }]);
    console.log(arr);
  }
  return (
    <>
      <button onClick={addItem}>Add</button>
      <div>
        {arr.map((arr) => (
          <li>{arr.value}</li>
        ))}
      </div>
    </>
  );
}

export default App;
