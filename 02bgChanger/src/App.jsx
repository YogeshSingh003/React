import { useState } from "react";
import Button from "./components/button";

function App() {
  const [color, setColor] = useState("#f1f1f1");

  return (
    <>
      <div
        className="h-screen w-full duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="absolute flex flex-wrap w-full justify-center bottom-10  px-2">
          <div className="flex justify-center rounded-full bg-white ">
            <Button btnColor="Red" textColor="white" colorSetter={setColor} />
            <Button btnColor="Green" textColor="white" colorSetter={setColor} />
            <Button btnColor="Blue" textColor="white" colorSetter={setColor} />
            <Button
              btnColor="Yellow"
              textColor="Black"
              colorSetter={setColor}
            />
            <Button
              btnColor="Orange"
              textColor="White"
              colorSetter={setColor}
            />
            <Button btnColor="Olive" textColor="white" colorSetter={setColor} />
            <Button
              btnColor="Violet"
              textColor="white"
              colorSetter={setColor}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
