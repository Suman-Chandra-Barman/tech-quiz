import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const Statistics = () => {
  const quizData = useLoaderData();
  console.log(quizData.data);

  return (
    <div className="w-1/2 mx-auto">
      <BarChart width={500} height={300} data={quizData.data}>
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
