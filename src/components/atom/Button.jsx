import React from "react";

const Button = ({ children, addClassname }) => {
  return (
    <button
      className={`py-3 px-7 rounded-3xl font-medium text-lg ${addClassname}`}
    >
      {children}
    </button>
  );
};

export default Button;
