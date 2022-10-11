import React from "react";

const Option = ({ option, id }) => {
  return (
    <div className="flex gap-3 items-center mt-2">
      <input type="radio" name={id} className="radio radio-accent radio-sm" />
      <p>{option}</p>
    </div>
  );
};

export default Option;
