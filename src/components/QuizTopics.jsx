import React from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

const QuizTopics = ({ quiz }) => {
  const { id, name, logo, total } = quiz;
  const navigate = useNavigate();
  const handleShowTopic = () => {
    navigate(`/topics/${id}`);
  };
  return (
    <div>
      <div className="card card-compact shadow-xl mt-5">
        <figure className=" bg-slate-400 ">
          <img src={logo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Total Quiz: {total}</p>
          <div className="card-actions items-center">
            <button
              onClick={handleShowTopic}
              className="btn btn-sm btn-info text-white w-full"
            >
              Start Practice
              <ArrowLongRightIcon className="h-5 w-5 text-white font-bold ml-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizTopics;
