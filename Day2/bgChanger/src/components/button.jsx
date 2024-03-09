import React from "react";

function Button({ btnColor, textColor, colorSetter }) {
  return (
    <div className="p-3">
      <button
        onClick={() => colorSetter(btnColor)}
        className="py-1 px-5 rounded-full "
        style={{ backgroundColor: btnColor, color: textColor }}
      >
        {btnColor}
      </button>
    </div>
  );
}

export default Button;
