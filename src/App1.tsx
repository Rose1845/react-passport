

import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Layout from './components/Layout'
//import {BrowserRouter,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Post from './pages/Post'


import {MapRouter} from 'react-router-map'
import {IRouteProps} from 'react-router-map/dist/types'


const routes: IRouteProps[] = [
  {
    pathName: 'Home',
    urlPath: '/',
    Component: <Home />,
    hasChildren: false,
  },
  {
    pathName: 'Post',
    urlPath: '/post/:id',
    Component: <Post />,
    hasChildren: false,
  },
  {
    pathName: 'Login',
    urlPath: '/login',
    Component: <Login />,
    hasChildren: false,
  },
  
]
function App() {
  
  return (
    <div className="App">
     
        <Layout>
        <MapRouter routes={routes} enableTopScroll={false} browserRouter={true} />
        </Layout>
     
    </div>
  )
}

export default App
