import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route ,Routes} from 'react-router-dom'
import SignUp from './screens/Signup/SignupPage.jsx'
import Login from './screens/login/LoginPage.jsx'
import HomeScreen from './screens/HomeScreen/HomeScreen.jsx'
import ActiveQuizzesScreen from './screens/ActiveQuiz/ActiveQuizScreen.jsx'
import CreateQuizScreen from './screens/CreateQuiz/CreateQuizScreen.jsx'
import QuizScreen from './screens/AttendQuiz/AttendQuizScreen.jsx'
import QuizManagementScreen from './screens/ManageQuiz/ManageQuizScreen.jsx'
import ViewStudentScoresScreen from './screens/ViewScore/ViewScoreScreen.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={'/signup'} element={<SignUp/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/active' element={<ActiveQuizzesScreen/>}/>
        <Route path='/createquiz' element={<CreateQuizScreen/>}/>
        <Route path='/attendquiz' element={<QuizScreen/>}/>
        <Route path='/managequiz' element={<QuizManagementScreen/>}/>
        <Route path='/viewscore' element={<ViewStudentScoresScreen/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
