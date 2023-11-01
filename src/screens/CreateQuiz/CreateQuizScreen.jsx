import React, { useState } from "react";
import FacultyNavBar from "../../commonComponents/FacultyNavBar";

const CreateQuizScreen = () => {
  const [quizData, setQuizData] = useState({
    title: "",
    description: "",
    questions: [],
  });

  const addQuestion = () => {
    setQuizData({
      ...quizData,
      questions: [
        ...quizData.questions,
        {
          questionText: "",
          answerChoices: ["", "", "", ""],
          correctAnswer: "",
        },
      ],
    });
  };

  const handleQuestionChange = (questionIndex, e) => {
    const updatedQuestions = [...quizData.questions];
    updatedQuestions[questionIndex].questionText = e.target.value;
    setQuizData({ ...quizData, questions: updatedQuestions });
  };

  const handleAnswerChoiceChange = (questionIndex, choiceIndex, e) => {
    const updatedQuestions = [...quizData.questions];
    updatedQuestions[questionIndex].answerChoices[choiceIndex] = e.target.value;
    setQuizData({ ...quizData, questions: updatedQuestions });
  };

  const handleCorrectAnswerChange = (questionIndex, e) => {
    const updatedQuestions = [...quizData.questions];
    updatedQuestions[questionIndex].correctAnswer = e.target.value;
    setQuizData({ ...quizData, questions: updatedQuestions });
  };

  const handleSubmit = () => {
    console.log(JSON.stringify(quizData)); // Send this JSON data to the server
  };

  return (
    <div className="bg-indigo-100 min-h-screen">
        <FacultyNavBar/>
      <div className="container mx-auto pt-20 p-8">
        <h1 className="text-2xl font-semibold text-indigo-900 mb-4">Create Quiz</h1>
        <input
          type="text"
          className="w-full bg-white p-4 rounded-md mb-4"
          placeholder="Quiz Title"
          value={quizData.title}
          onChange={(e) => setQuizData({ ...quizData, title: e.target.value })}
        />
        <textarea
          className="w-full h-32 bg-white p-4 rounded-md mb-4"
          placeholder="Description"
          value={quizData.description}
          onChange={(e) => setQuizData({ ...quizData, description: e.target.value })}
        />
        {quizData.questions.map((question, questionIndex) => (
          <div key={questionIndex} className="bg-white p-4 rounded-md mb-4">
            <input
              type="text"
              className="w-full bg-white p-2 mb-2 rounded-md"
              placeholder={`Question ${questionIndex + 1}`}
              value={question.questionText}
              onChange={(e) => handleQuestionChange(questionIndex, e)}
            />
            {question.answerChoices.map((choice, choiceIndex) => (
              <input
                key={choiceIndex}
                type="text"
                className="w-full bg-white p-2 mb-2 rounded-md"
                placeholder={`Option ${choiceIndex + 1}`}
                value={choice}
                onChange={(e) => handleAnswerChoiceChange(questionIndex, choiceIndex, e)}
              />
            ))}
            <select
              className="w-full bg-white p-2 mb-2 rounded-md"
              value={question.correctAnswer}
              onChange={(e) => handleCorrectAnswerChange(questionIndex, e)}
            >
              <option value="" disabled>
                Select Correct Answer
              </option>
              {question.answerChoices.map((choice, choiceIndex) => (
                <option key={choiceIndex} value={choice}>
                  {choice}
                </option>
              ))}
            </select>
          </div>
        ))}
        <button
          className="bg-indigo-500 text-white px-4 py-2 mr-2 rounded hover:bg-indigo-600"
          onClick={addQuestion}
        >
          Add Question
        </button>
        <button
          className="bg-indigo-500 text-white px-4 py-2 rounded hover-bg-indigo-600"
          onClick={handleSubmit}
        >
          Create Quiz
        </button>
      </div>
    </div>
  );
};

export default CreateQuizScreen;
