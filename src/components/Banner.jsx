import React from "react";

const Banner = () => {
  return (
    <header className="container mx-auto px-3 flex gap-4 mt-10 justify-between items-center border shadow-lg rounded-md ">
      <div className="w-[60%]">
        <figure>
          <img src="banner.jpg" alt="" />
        </figure>
      </div>
      <div className="w-[35%]">
        <h1 className="text-2xl font-semibold mb-3 text-center">
          Welcome to Tech Quiz
        </h1>
        <p className="text-justify">
          <small>
            Are you a tech geek? If yes, this "IT And Tech Knowledge Quiz" is
            exclusively made for people like you. The quiz contains various
            facts, trivia, and information-based questions that will help you
            gauge your IT knowledge and also add to your knowledge reservoir.
            The quiz will help you ace your career and exams too. All the best!
          </small>
        </p>
      </div>
    </header>
  );
};

export default Banner;
