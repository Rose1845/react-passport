
import Login from './pages/Login'
import Layout from './components/Layout'
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import Home from './pages/Home'
import Post from './pages/Post'
import axios from 'axios'
import { useEffect, useState } from 'react'


function App() {
  const [user,setUser] = useState(null)
  const sucessUrl ="http://localhost:5000/auth/login/success"

  useEffect(()=>{
    const getUser = ()=>{
     axios(sucessUrl,
      {
        method:"GET",
        // credentials:"include",
        headers:{
          Accept:"application/json",
          "Access-Control-Allow-Origin": "true",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"

        }
        // headers:{
        //  
        //   "Content-Type":"application/json",
        //   "Access-Control-Allow-Credentials":true,
        // },
      
      }).then(response=>{
        if(response.status===200) return response.json()
        throw new Error("AUthentication failed")
      }).then(resObject=>{
        setUser(resObject.user)
      }).catch((err)=>{
        console.log(err);
        
      })
    
    }
    getUser()
  },[])
  console.log(user)

  return (
    <BrowserRouter>
    <Layout>
    <Routes>
      <Route path="/"element={<Home/>}/>
      <Route 
      path='/login'
      element={user ? <Navigate to="/"/>:<Login/>}
      />
      <Route path='/post/:id' element={user ? <Post/>: <Navigate to='/login'/>} />

    </Routes>
    </Layout>
    </BrowserRouter>
  )
}

export default App
