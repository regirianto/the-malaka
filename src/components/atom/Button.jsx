import React from "react";

const Button = ({ title, addClassname }) => {
  return (
    <button
      className={`py-2 px-5 rounded-3xl font-medium text-lg ${addClassname}`}
    >
      {title}
    </button>
  );
};

export default Button;
