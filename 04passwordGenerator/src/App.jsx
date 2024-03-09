import {
  useState,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react";

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "`~!@#$%^&*()-_=+,./?><[]{}";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useLayoutEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="flex flex-col justify-center h-screen w-full items-center gap-3 bg-gray-900 text-white">
        <h1>Password Generator</h1>
        <div className="flex  shadow rounded-lg overflow-hidden text-black ">
          <input
            type="text"
            value={password}
            readOnly
            placeholder="Password"
            className=" px-3 py-1"
            ref={passwordRef}
          ></input>
          <button className="bg-blue-500 px-3 py-1" onClick={copyToClipboard}>
            Copy
          </button>
        </div>
        <div className=" flex gap-2 ">
          <input
            type="range"
            min={6}
            max={20}
            className="cursor-pointer"
            value={length}
            onChange={(e) => {
              setlength(e.target.value);
            }}
          ></input>
          <label>Length : {length}</label>
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          ></input>
          <label htmlFor="numberInput">Numbers</label>
          <input
            type="checkbox"
            defaultChecked={setCharAllowed}
            id="charInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          ></input>
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
    </>
  );
}

export default App;
