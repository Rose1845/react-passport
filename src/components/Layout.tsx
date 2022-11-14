import React, { Children } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

//import {MapRouter} from 'react-router-map'
//import {IRouteProps} from 'react-router-map/dist/types'

type PropsLayout={
  children:React.ReactElement
}

const Layout = ({children}:PropsLayout) => {
  const user = false
  return (
    <div>
      <Navbar user={user}/>

      {children}

      <Footer/>
    </div>
  )
}

export default Layout