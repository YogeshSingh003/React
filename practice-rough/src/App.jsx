import React, { createContext, useRef } from "react";
import A from "./components/A";

const data = createContext();
const data1 = createContext();

function App() {
  const refElement = useRef("");
  console.log(refElement);
  const colorChange = () => {
    refElement.current.style.padding = "200px";
  };
  return (
    <data.Provider value={"Yogesh"}>
      <data1.Provider value={"Bhati"}>
        <A></A>
        <h1 ref={refElement}>Ram Ram</h1>
        <button onClick={colorChange}>Change</button>
      </data1.Provider>
    </data.Provider>
  );
}

export default App;
export { data, data1 };
