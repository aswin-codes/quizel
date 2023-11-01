import React, { useState } from "react";
import FacultyNavBar from "../../commonComponents/FacultyNavBar";

// Mock data for student scores
const studentScoresData = [
  {
    studentId: "student1",
    studentName: "John Doe",
    score: 80,
    responses: ["Answer 1", "Answer 2", "Answer 3", "Answer 4", "Answer 5"],
  },
  {
    studentId: "student2",
    studentName: "Jane Smith",
    score: 95,
    responses: ["Answer 1", "Answer 2", "Answer 3", "Answer 4", "Answer 5"],
  },
  {
    studentId: "student3",
    studentName: "Bob Johnson",
    score: 75,
    responses: ["Answer 1", "Answer 2", "Answer 3", "Answer 4", "Answer 5"],
  },
];

const ViewStudentScoresScreen = () => {
  // State to track selected quiz or filter criteria
  const [selectedQuiz, setSelectedQuiz] = useState(""); // You can replace this with the actual quiz selection

  return (
    <div className="bg-indigo-100 min-h-screen">
        <FacultyNavBar/>
      <div className="container pt-20 mx-auto p-8">
        <h1 className="text-2xl font-semibold text-indigo-900 mb-4">View Student Scores</h1>

      

        {/* Student scores and responses */}
        <div className="bg-white p-4 rounded-md">
          <h2 className="text-lg font-semibold mb-2">Student Scores and Responses</h2>
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="border border-indigo-300 px-4 py-2">Student ID</th>
                <th className="border border-indigo-300 px-4 py-2">Student Name</th>
                <th className="border border-indigo-300 px-4 py-2">Score</th>
              </tr>
            </thead>
            <tbody>
              {studentScoresData.map((student) => (
                <tr key={student.studentId}>
                  <td className="border border-indigo-300 px-4 py-2">{student.studentId}</td>
                  <td className="border border-indigo-300 px-4 py-2">{student.studentName}</td>
                  <td className="border border-indigo-300 px-4 py-2">{student.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewStudentScoresScreen;
