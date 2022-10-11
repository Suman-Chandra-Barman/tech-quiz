import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "./Question";

const Topics = () => {
  const topic = useLoaderData();
  const { name, questions } = topic.data;
  return (
    <div className="my-10">
      <h2 className="text-2xl text-center font-semibold">Quiz of {name}</h2>
      {questions.map((quiz, idx) => (
        <Question key={quiz.id} quiz={quiz} idx={idx} />
      ))}
    </div>
  );
};

export default Topics;
