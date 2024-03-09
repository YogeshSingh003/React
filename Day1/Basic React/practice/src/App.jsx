import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(5);

  const addValue = () => {
    if (counter < 20) {
      setCounter((counter) => counter + 1);
      setCounter((counter) => counter + 1);
      setCounter((counter) => counter + 1);
    }
  };

  const removeValue = function () {
    if (counter > 0) setCounter(counter - 1);
  };
  return (
    <>
      <h1>Counter Value : {counter}</h1>
      <button onClick={addValue}>Add 3 Number</button>
      <button onClick={removeValue}>Remove Number</button>
    </>
  );
}

export default App;
