
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import SignIn from './pages/signin'
import SignUp from './pages/signup'
const App = () => {

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/courseapp/signin' element={<SignIn/>}/>
      <Route path='/courseapp/signup' element={<SignUp/>}/>
      
     </Routes>
    </>
  )
}

export default App
