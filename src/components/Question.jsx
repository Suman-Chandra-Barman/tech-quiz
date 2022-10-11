import React from "react";
import Option from "./Option";
import { EyeIcon } from "@heroicons/react/24/solid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Question = ({ quiz, idx }) => {
  const { id, correctAnswer, question, options } = quiz;
  console.log(quiz);

  const showCorrectAns = () =>
    toast.success(`Correct answer : ${correctAnswer}`, {
      position: "top-center",
      autoClose: 1500,
    });
  const handleAnswer = (ans) => {
    if (correctAnswer === ans) {
      toast.success("Correct answer!", {
        position: "top-center",
        autoClose: 1000,
      });
    } else {
      toast.error("Wrong answer!", { position: "top-center", autoClose: 1000 });
    }
  };

  return (
    <div className="border max-w-[700px] mx-auto my-10 rounded-lg p-5 shadow-md">
      <div className="flex justify-between gap-5">
        <h3>
          Quiz {idx + 1} : {question}
        </h3>
        <div>
          <EyeIcon
            onClick={showCorrectAns}
            className="h-6 w-6 text-cyan-500 cursor-pointer hover:text-red-500"
          />
          <ToastContainer />
        </div>
      </div>
      <div>
        {options.map((option, idx) => (
          <Option
            key={idx}
            option={option}
            name={id}
            handleAnswer={handleAnswer}
          />
        ))}
      </div>
    </div>
  );
};

export default Question;
