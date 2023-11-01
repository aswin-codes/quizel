import React, { useState } from "react";
import Navbar from "../../commonComponents/NavBar";
import { useNavigate } from "react-router-dom";

const ActiveQuizzesScreen = () => {
  const navigate= useNavigate();
  const [quizzes, setQuizzes] = useState([
    {
      title: "Math Quiz",
      timeRemaining: "1h 30m",
      status: "active",
    },
    {
      title: "Science Quiz",
      timeRemaining: "45m",
      status: "active",
    },
    {
      title: "History Quiz",
      timeRemaining: "2h",
      status: "active",
    },
  ]);

  return (
    <div className="bg-indigo-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto pt-20 py-10 px-10 ">
        <h1 className="text-2xl font-semibold text-indigo-900 mb-4">Active Quizzes</h1>
        {quizzes.map((quiz, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-md shadow-md mb-4 md:flex md:items-center md:justify-between"
          >
            <div>
              <h2 className="text-lg font-semibold text-indigo-900">{quiz.title}</h2>
              <p className="text-sm text-indigo-600">{`Time Remaining: ${quiz.timeRemaining}`}</p>
            </div>
            <button onClick={() =>navigate('/attendquiz')}
              className="bg-indigo-500 w-full mt-2 md:w-auto md:mt-0 text-white px-4 py-2 rounded hover:bg-indigo-600"
              disabled={quiz.status !== "active"}
            >
              {quiz.status === "active" ? "Start Quiz" : "Closed"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveQuizzesScreen;
