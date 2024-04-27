import React, { useEffect, useState } from "react";

function Form() {
  const data = { name: "", email: "", password: "" };
  const [inputData, setInputData] = useState(data);
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    console.log("registered");
  }, [flag]);
  function handleData(e) {
    if (e.target.value === "") {
      setFlag(false);
    }
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    console.log(inputData);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!inputData.name || !inputData.email || !inputData.password) {
      alert("All fields are mendatory");
    } else {
      setFlag(true);
    }
  }
  return (
    <>
      <div>
        {flag ? (
          <h2>
            Hello {inputData.name}, you've registered successfully. Thank You
          </h2>
        ) : (
          ""
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <h1>Registration Form</h1>
        <div>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            value={inputData.name}
            onChange={handleData}
          ></input>
        </div>
        <div>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={inputData.email}
            onChange={handleData}
          ></input>
        </div>
        <div>
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            value={inputData.password}
            onChange={handleData}
          ></input>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}

export default Form;
