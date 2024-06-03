import React from "react";
import img from "../img.png";

function Card({ details }) {
  return (
    <div className="relative h-[400px] w-[300px] rounded-md">
      <img
        src={img}
        alt="Yogesh"
        className="z-0 h-full w-full rounded-md object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">
          {details.nam}, {details.age}
        </h1>
        <p className="mt-2 text-sm text-gray-300">
          I'm {details.occupation} by profession. Learing ReactJS and it's a
          basic project
        </p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          <a href="https://github.com/YogeshSingh003" target="_blank">
            {" "}
            View Profile →{" "}
          </a>
        </button>
      </div>
    </div>
  );
}

export default Card;
