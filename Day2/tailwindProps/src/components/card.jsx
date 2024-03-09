import React from "react";

function Card({ details }) {
  return (
    <div className="relative h-[400px] w-[300px] rounded-md">
      <img
        src="https://scontent.fdel27-3.fna.fbcdn.net/v/t39.30808-6/211642876_3049712388649113_8583430303222808204_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=naNRliTMV48AX8OTQQl&_nc_ht=scontent.fdel27-3.fna&oh=00_AfDLGCEfNmf77JqgLcNOvEK25ZIKjs6l57as2XJw9x6F6g&oe=65EF1EB8"
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
          View Profile →
        </button>
      </div>
    </div>
  );
}

export default Card;
