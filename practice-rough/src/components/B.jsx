import React from "react";
import { useContext } from "react";
import { data } from "../App";
import A from "./A";

function B() {
  const naam = useContext(data);
  return (
    <>
      {/* <data.Consumer>{(n) => <h1>Name : {n}</h1>}</data.Consumer> */}
      <h1>B: {naam}</h1>
      <A></A>
    </>
  );
}

export default B;
