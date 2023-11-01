import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FacultyNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    console.log("Toggling Menu");
    setIsOpen(!isOpen);
  };
  return (
    <nav className="fixed bg-indigo-500 z-50">
      <div>
        <div
          className={`flex w-screen lg:px-20 justify-between items-center py-4  md:px-8  px-6 ${
            isOpen ? "bg-activebrown" : ""
          }`}
        >
          <div className="cursor-pointer" onClick={() => navigate("/")}>
            <h1 className="text-2xl text-white font-semibold">QuizWiz</h1>
          </div>
          <div>
            <ul className="hidden lg:flex text-white gap-10 ">
              <li>
                <span className="cursor-pointer " onClick={() => navigate("/")}>
                  Dashboard
                </span>
              </li>
              <li onClick={() => navigate("/createquiz")}>
                <span className="cursor-pointer ">Create Quiz</span>
              </li>
              <li onClick={() => navigate("/managequiz")}>
                <span className="cursor-pointer ">Manage Quiz</span>
              </li>
            </ul>
            <div className="lg:hidden">
              <button onClick={toggleMenu}>
                {!isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#fff"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#fff"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div
          onClick={() => toggleMenu()}
          className={`flex flex-col flex-1 h-screen  transition-all  duration-300 ease-in-out overflow-hidden lg:hidden ${
            isOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className={`bg-activebrown   backdrop-opacity-5  `}>
            <ul className="flex-col px-5  text-white gap-10 ">
              <li className="px-4 py-2 ">
                <p
                  className="p-2 rounded-md hover:bg-indigo-300"
                  onClick={() => navigate("/")}
                >
                  Dashboard
                </p>
              </li>
              <li
                onClick={() => navigate("/createquiz")}
                className="px-4 py-2 "
              >
                <p className="p-2 rounded-md hover:bg-indigo-300">CreateQuiz</p>
              </li>
              <li
                onClick={() => navigate("/managequiz")}
                className="px-4 py-2 "
              >
                <p className="p-2 rounded-md hover:bg-indigo-300">
                  Manage Quiz
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default FacultyNavBar;
