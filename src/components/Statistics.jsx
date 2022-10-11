import React from "react";
import { useLoaderData } from "react-router-dom";
import { XAxis, YAxis, Tooltip, Legend, BarChart, Bar } from "recharts";

const Statistics = () => {
  const quizData = useLoaderData();

  return (
    <div className="flex justify-center my-10">
      <BarChart width={350} height={300} data={quizData.data}>
        <Bar dataKey="total"></Bar>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Legend />
        <Tooltip />
      </BarChart>
    </div>
  );
};

export default Statistics;
