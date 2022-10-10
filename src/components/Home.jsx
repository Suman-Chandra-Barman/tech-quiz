import React from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Quiz from "./Quiz";

const Home = () => {
  const quizData = useLoaderData();
  return (
    <div className="container mx-auto">
      <Banner />
      <div className="grid grid-cols-4 gap-8 justify-between mt-10">
        {quizData.data.map((quiz) => (
          <Quiz key={quiz.id} quiz={quiz} />
        ))}
      </div>
    </div>
  );
};

export default Home;
