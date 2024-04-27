import React, { useContext } from "react";
import { data, data1 } from "../App";
// import B from "./B";

function A() {
  const nam = useContext(data);
  const surNam = useContext(data1);

  return (
    <>
      <h1>
        Name hai : {nam}
        {" " + surNam}
      </h1>
      {/* <B></B> */}
    </>
  );
}

export default A;
