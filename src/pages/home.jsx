import NavBar from '../components/navbar'
import Layout from '../components/layout'
import Footer from '../components/footer'
import LandingPage from '../components/landingpage'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {
  const [userEmail, setUserEmail] = useState(null)
  const checkUser  = async() =>{
    const res = await axios.get('http://localhost:3000/user/me',{
      headers:{
        Authorization:'Bearer ' + localStorage.getItem('token')
      }
    })
    if(!res.data.username){
      const res = await axios.get('http://localhost:3000/admin/me',{
        headers:{
          Authorization:'Bearer ' + localStorage.getItem('token')
        }
      })
      if(res.data.username){
        setUserEmail(res.data.username)
      }
    }else{

      setUserEmail(res.data.username)
    }
  }
  useEffect(()=>{
    checkUser()
  },[])

  return (
    <>
    <NavBar userEmail={userEmail} setUserEmail={setUserEmail}/>
    <LandingPage/>
    <Layout/>
    <Footer/>
    </>  
)
}

export default Home