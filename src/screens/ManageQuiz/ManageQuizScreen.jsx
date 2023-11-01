import React, { useState } from "react";
import FacultyNavBar from "../../commonComponents/FacultyNavBar";
import { useNavigate } from "react-router-dom";

const quizData = [
  {
    quizId: "quiz1",
    title: "Java Quiz",
    description: "Test your Java knowledge",
  },
  {
    quizId: "quiz2",
    title: "Python Quiz",
    description: "Test your Python knowledge",
  },
  {
    quizId: "quiz3",
    title: "JavaScript Quiz",
    description: "Test your JavaScript knowledge",
  },
];

const QuizManagementScreen = () => {
    const navigate = useNavigate();
    const [selectedQuizId, setSelectedQuizId] = useState("");

  const handleViewScores = (quizId) => {
    navigate('/viewscore');
    console.log(`View Scores for Quiz ID: ${quizId}`);
  };

  return (
    <div className="bg-indigo-100 min-h-screen">
        <FacultyNavBar/>
      <div className="container mx-auto pt-20 p-8">
        <h1 className="text-2xl font-semibold text-indigo-900 mb-4">
          Quiz Management
        </h1>
        {quizData.map((quiz) => (
          <div key={quiz.quizId} className="bg-white p-4 rounded-md mb-4 md:flex-row flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-semibold">{quiz.title}</h2>
              <p className="text-indigo-700 mb-2">{quiz.description}</p>
            </div>
            <button
              className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
              onClick={() => handleViewScores(quiz.quizId)}
            >
              View Scores
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizManagementScreen;
