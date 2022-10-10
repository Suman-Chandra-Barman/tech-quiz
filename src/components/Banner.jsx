import React from "react";

const Banner = () => {
  return (
    <header className="container mx-auto border-2 rounded-lg mt-10">
      <div>
        <figure>
          <img className="rounded-lg" src="banner.jpg" alt="" />
        </figure>
      </div>
      <div className="my-10 px-5">
        <h1 className="text-3xl font-semibold mb-3 text-center">
          Welcome to Tech Quiz!
        </h1>
        <p className="text-justify">
          Are you a tech geek? If yes, this "IT And Tech Knowledge Quiz" is
          exclusively made for people like you. The quiz contains various facts,
          trivia, and information-based questions that will help you gauge your
          IT knowledge and also add to your knowledge reservoir. The quiz will
          help you ace your career and exams too. All the best!
        </p>
      </div>
    </header>
  );
};

export default Banner;
