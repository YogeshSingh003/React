import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/yogeshsingh003")
  //       .then((response) => response.json())
  //       .then((data) => setData(data));
  //     console.log({ data });
  //   }, []);
  return (
    <div className="text-3xl flex justify-evenly items-center  text-center p-5 text-white bg-gray-700">
      GitHub Name : {data.name}
      <br />
      GitHub Username : {data.login}
      <br />
      Github followers : {data.followers}
      <img className="rounded-full  " src={data.avatar_url} />
    </div>
  );
}

export default Github;
export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/yogeshsingh003");
  return response.json();
};
