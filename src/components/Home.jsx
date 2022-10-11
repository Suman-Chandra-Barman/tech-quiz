import React from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import QuizTopics from "./QuizTopics";

const Home = () => {
  const quizData = useLoaderData();
  return (
    <div className="container mx-auto">
      <Banner />
      <div className="grid grid-cols-4 gap-8 justify-between my-10">
        {quizData.data.map((quiz) => (
          <QuizTopics key={quiz.id} quiz={quiz} />
        ))}
      </div>
    </div>
  );
};

export default Home;
