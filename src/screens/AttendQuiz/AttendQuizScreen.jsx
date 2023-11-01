import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const quizData = {
  title: "Java Quiz",
  description: "Blah Blah Blah",
  questions: [
    {
      questionText: "Who made Java ?",
      answerChoices: ["Person 1", "Person 2", "Person 3", "Person 4"],
      correctAnswer: "Person 3",
    },
    {
      questionText: "Who made Python ?",
      answerChoices: ["Person 1", "Person 2", "Person 3", "Person 4"],
      correctAnswer: "Person 4",
    },
  ],
};

const QuizScreen = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState(new Array(quizData.questions.length).fill(""));
  const [showResult, setShowResult] = useState(false);

  const handleAnswerSelect = (questionIndex, selectedAnswer) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = selectedAnswer;
    setAnswers(newAnswers);
  };

  const handleSubmitQuiz = () => {
    // Calculate the score
    const score = quizData.questions.reduce((totalScore, question, questionIndex) => {
      if (question.correctAnswer === answers[questionIndex]) {
        return totalScore + 1;
      }
      return totalScore;
    }, 0);

    // Display the result
    setShowResult(true);
  };

  const handleReturnToDashboard = () => {
    // Implement the logic to return to the dashboard, e.g., using routing or navigation
    navigate('/');
    console.log("Return to dashboard");
  };

  return (
    <div className="bg-indigo-100 min-h-screen">
      <div className="container mx-auto p-8">
        <h1 className="text-2xl font-semibold text-indigo-900 mb-4">{quizData.title}</h1>
        {showResult ? (
          <div className="bg-white p-4 rounded-md">
            <h2 className="text-lg font-semibold mb-2">Quiz Result</h2>
            <p>Your Score: {answers.filter((answer, index) => answer === quizData.questions[index].correctAnswer).length}/{quizData.questions.length}</p>
            <button
              className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 mt-4"
              onClick={handleReturnToDashboard}
            >
              Return to Dashboard
            </button>
          </div>
        ) : (
          <>
            <p className="text-indigo-700 mb-4">{quizData.description}</p>
            {quizData.questions.map((question, questionIndex) => (
              <div key={questionIndex} className="bg-white p-4 rounded-md mb-4">
                <p className="text-lg font-semibold mb-2">{`Q${questionIndex + 1}: ${question.questionText}`}</p>
                {question.answerChoices.map((choice, choiceIndex) => (
                  <div key={choiceIndex} className="mb-2">
                    <label>
                      <input
                        type="radio"
                        value={choice}
                        checked={answers[questionIndex] === choice}
                        onChange={() => handleAnswerSelect(questionIndex, choice)}
                      />
                      <span className="ml-2">{choice}</span>
                    </label>
                  </div>
                ))}
              </div>
            ))}
            <button
              className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
              onClick={handleSubmitQuiz}
            >
              Submit Quiz
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default QuizScreen;
