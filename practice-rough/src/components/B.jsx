import React from "react";
import { data } from "./A";

function B() {
  return (
    <>
      <data.Consumer>{(n) => <h1>Name : {n}</h1>}</data.Consumer>
    </>
  );
}

export default B;
