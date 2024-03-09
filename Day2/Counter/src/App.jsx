import { useState } from "react";
import "./App.css";

function App() {
  // let counter = 15;
  let [counter, setCounter] = useState(10);

  const addValue = () => {
    if (counter < 20) setCounter(counter + 1);
  };
  const removeValue = () => {
    if (counter > 0) setCounter(counter - 1);
  };
  return (
    <>
      <h1>Counter value : {counter}</h1>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  );
}

export default App;
