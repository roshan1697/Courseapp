
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import SignIn from './pages/signin'
import SignUp from './pages/signup'
import CoursePage from './pages/coursepage'
import CourseEditPage from './pages/courseeditpage'
import CourseAddPage from './pages/courseaddpage'
const App = () => {

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/courseapp/signin' element={<SignIn/>}/>
      <Route path='/courseapp/signup' element={<SignUp/>}/>
      <Route path='/courseapp/courses/course' element={<CoursePage/>}/>
      <Route path='/courseapp/course/edit' element={<CourseEditPage/>}/>
      <Route path='/courseapp/course/add' element={<CourseAddPage/>}/>
      <Route path='/courseapp/courses' element={<Home/>}/>


     </Routes>
    </>
  )
}

export default App
