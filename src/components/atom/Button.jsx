import React from "react";

const Button = ({ children, addClassname, lg }) => {
  if (!lg) {
    return (
      <button
        className={`py-3 px-7 rounded-3xl font-medium text-lg ${addClassname}`}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      className={`md:py-6 md:px-11 rounded-[10px] font-medium text-lg ${addClassname}`}
    >
      {children}
    </button>
  );
};

export default Button;
