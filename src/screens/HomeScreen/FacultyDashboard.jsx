import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "react-circular-progressbar/dist/styles.css";
import Navbar from "../../commonComponents/NavBar";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import FacultyNavBar from "../../commonComponents/FacultyNavBar";
import { useNavigate } from "react-router-dom";

const FacultyDashboard = () => {
  const navigate = useNavigate();
  const [createdQuizzes, setCreatedQuizzes] = useState([
    { title: "Quiz 6", description: "A short description of Quiz 6" },
    { title: "Quiz 7", description: "A short description of Quiz 7" },
    { title: "Quiz 8", description: "A short description of Quiz 8" },
  ]);

  const [quizResults, setQuizResults] = useState([
    { title: "Quiz 6", averageScore: 85 },
    { title: "Quiz 7", averageScore: 72 },
    { title: "Quiz 8", averageScore: 94 },
  ]);

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <FacultyNavBar/>
      <div className="pt-14">
        {/* Faculty Dashboard Content */}
        <div className="container mx-auto p-8">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Welcome to your QuizWiz Faculty Dashboard
          </h2>

          {/* Create New Quiz Section */}
          <div className="bg-indigo-100 p-4 rounded shadow-md">
            <h3 className="text-2xl font-semibold text-indigo-900 mb-2">
              Create New Quiz
            </h3>
            <div className="bg-white p-4 rounded shadow-md">
              <button onClick={() => navigate('/createquiz')} className="bg-indigo-500 text-white rounded px-4 py-2 hover:bg-indigo-600">
                Create Quiz
              </button>
            </div>
          </div>
            {/*Created Quiz section*/}
          <div className="bg-indigo-100 p-4 rounded shadow-md mt-4">
          <h3 className="text-2xl font-semibold text-indigo-900 mb-2">Active Quizzes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {createdQuizzes.map((quiz, index) => (
              <div key={index} className="bg-white p-4 rounded shadow-md">
                <h3 className="text-xl font-semibold text-indigo-900">{quiz.title}</h3>
                <p className="text-indigo-700">{quiz.description}</p>
                <button className="mt-2 bg-indigo-500 text-white rounded px-4 py-2 hover:bg-indigo-600">
                  View
                </button>
              </div>
            ))}
          </div>
        </div>

          {/* Quiz Results Section */}
          <div className="bg-indigo-100 mt-4 p-4 rounded shadow-md">
            <h3 className="text-2xl font-semibold text-indigo-900 mb-2">
              Quiz Results
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {quizResults.map((quiz, index) => (
                <div key={index} className="bg-white p-4 rounded shadow-md">
                  <h3 className="text-xl font-semibold text-indigo-900">
                    {quiz.title}
                  </h3>
                  <div  className="flex flex-col gap-4 items-center">
                  <div className="flex items-center justify-center">
                    <div style={{ width: "80px" }}>
                      <CircularProgressbar
                        value={quiz.averageScore}
                        text={`${quiz.averageScore}%`}
                        styles={buildStyles({
                          textColor: "#3498db",
                          pathColor: "#3498db",
                        })}
                      />
                    </div>
                    </div>
                  
                  <button className="bg-indigo-500 text-white rounded px-4 py-2 hover:bg-indigo-600">
                    View Results
                  </button>
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

export default FacultyDashboard;
