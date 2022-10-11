import React from "react";
import Option from "./Option";
import { EyeIcon } from "@heroicons/react/24/solid";

const Question = ({ quiz, idx }) => {
  const { id, correctAnswer, question, options } = quiz;

  return (
    <div className="border max-w-[700px] mx-auto my-10 rounded-lg p-5 shadow-md">
      <div className="flex justify-between gap-5">
        <h3>
          Quiz {idx + 1} : {question}
        </h3>
        <div>
          <EyeIcon className="h-6 w-6 text-cyan-500" />
        </div>
      </div>
      <div>
        {options.map((option, idx) => (
          <Option key={idx} option={option} />
        ))}
      </div>
    </div>
  );
};

export default Question;
