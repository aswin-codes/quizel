import React, { useState } from 'react'
import StudentDashboard from './StudemtDashBaord'
import FacultyDashboard from './FacultyDashboard'

const HomeScreen = () => {
  const [isFaculty , setIsFaculty] = useState(true)
  return (
    <div>{ isFaculty ? <FacultyDashboard/> : <StudentDashboard/>}</div>
  )
}

export default HomeScreen