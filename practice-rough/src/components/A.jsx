import React, { useContext } from "react";
import { data } from "../App";

function A() {
  const nam = useContext(data);

  return (
    <>
      <h1>Name hai : {nam}</h1>
    </>
  );
}

export default A;
