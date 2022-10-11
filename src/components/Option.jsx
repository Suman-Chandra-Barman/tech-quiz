import React from "react";

const Option = ({ option, name, handleAnswer }) => {
  return (
    <div className="flex gap-3 items-center mt-2">
      <input
        onClick={() => handleAnswer(option)}
        type="radio"
        name={name}
        className="radio radio-accent radio-sm"
      />
      <p>{option}</p>
    </div>
  );
};

export default Option;
