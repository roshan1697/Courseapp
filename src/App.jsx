
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import SignIn from './pages/signin'
import SignUp from './pages/signup'
import CoursePage from './pages/coursepage'
import CourseEditPage from './pages/courseeditpage'
import CourseAddPage from './pages/courseaddpage'
import Courses from './pages/courses'

const App = () => {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/courseapp/signin' element={<SignIn/>}/>
      <Route path='/courseapp/signup' element={<SignUp/>}/>
      <Route path='/courseapp/courses/course/:id' element={<CoursePage/>}/>
      <Route path='/courseapp/course/edit/:id' element={<CourseEditPage/>}/>
      <Route path='/courseapp/course/add' element={<CourseAddPage/>}/>
      <Route path='/courseapp/courses' element={<Courses/>}/>


    </Routes>
    </>
  )
}

export default App
