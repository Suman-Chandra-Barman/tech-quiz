import React from "react";
import { useLoaderData } from "react-router-dom";

const Statistics = () => {
  const quizData = useLoaderData();
  return <div>{quizData.data.map((quiz) => console.log(quiz.total))}</div>;
};

export default Statistics;
