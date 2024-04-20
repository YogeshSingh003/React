import React, { createContext, useEffect, useState } from "react";
import A from "./components/A";
import New from "./components/New";

const data = createContext();

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `${count}`;
    updateCount();
  }, [name]);

  const updateCount = () => {
    setCount(count + 1);
  };
  console.log(name);
  return (
    <>
      <data.Provider>
        <button onClick={updateCount}>Add + 1</button>
        <input type="text" onChange={(e) => setName(e.target.value)}></input>
        <h1>
          Count : {count} Name : {name}
        </h1>
      </data.Provider>
    </>
  );
}

export default App;
export { data };
