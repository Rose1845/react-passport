
import Login from './pages/Login'
import Layout from './components/Layout'
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import Home from './pages/Home'
import Post from './pages/Post'


function App() {
  const user = true

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
