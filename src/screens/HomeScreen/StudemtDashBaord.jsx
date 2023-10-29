import React, { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Navbar from "../../commonComponents/NavBar";

const StudentDashboard = () => {
  const [previousQuizzes, setPreviousQuizzes] = useState([
    { title: "Quiz 1", description: "A short description of Quiz 1" },
    { title: "Quiz 2", description: "A short description of Quiz 2" },
    { title: "Quiz 3", description: "A short description of Quiz 3" },
  ]);

  const [previousResults, setPreviousResults] = useState([
    { title: "Quiz 1", score: 90 },
    { title: "Quiz 2", score: 78 },
    { title: "Quiz 3", score: 95 },
  ]);

  const [activeQuizzes, setActiveQuizzes] = useState([
    { title: "Quiz 4", description: "A short description of Quiz 4" },
    { title: "Quiz 5", description: "A short description of Quiz 5" },
  ]);

  return (
    <div>
      {/* Navbar */}
     <Navbar/>
      <div className="pt-14">
      {/* Student Dashboard Content */}
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          Welcome to your QuizWiz Dashboard
        </h2>
        
        {/* Active Quizzes Section */}
        <div className="bg-indigo-100 p-4 rounded shadow-md">
          <h3 className="text-2xl font-semibold text-indigo-900 mb-2">Active Quizzes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {activeQuizzes.map((quiz, index) => (
              <div key={index} className="bg-white p-4 rounded shadow-md">
                <h3 className="text-xl font-semibold text-indigo-900">{quiz.title}</h3>
                <p className="text-indigo-700">{quiz.description}</p>
                <button className="mt-2 bg-indigo-500 text-white rounded px-4 py-2 hover:bg-indigo-600">
                  Attend Test
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Previous Quizzes Section */}
        <div className="bg-indigo-100 mt-4 p-4 rounded shadow-md">
          <h3 className="text-2xl font-semibold text-indigo-900 mb-2">Previous Quizzes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {previousQuizzes.map((quiz, index) => (
              <div key={index} className="bg-white p-4 rounded shadow-md">
                <h3 className="text-xl font-semibold text-indigo-900">{quiz.title}</h3>
                <p className="text-indigo-700">{quiz.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Your Results Section */}
        <div className="bg-indigo-100 mt-4 p-4 rounded shadow-md">
          <h3 className="text-2xl font-semibold text-indigo-900 mb-2">Your Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {previousResults.map((result, index) => (
              <div key={index} className="bg-white p-4 rounded shadow-md">
                <h3 className="text-xl font-semibold text-indigo-900">{result.title}</h3>
                <div className="flex items-center justify-center">
                  <div style={{ width: "80px" }}>
                    <CircularProgressbar
                      value={result.score}
                      text={`${result.score}%`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
