import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {FcGoogle } from 'react-icons/fc'

import { faCoffee } from '@fortawesome/free-solid-svg-icons'
const Login = () => {
  return (
    <div className='login'>
        <h1 className="loginTitle">login</h1>
        
        <div className="wrapper">
            <div className="left">
            <div className="loginButton google">
                    <img src="" alt="google" className="icon" />
                </div>

                <div className="loginButton facebook">
                    <img src="" alt="facebook" className="icon" />
                </div>

                <div className="loginButton github">
                    <img src="" alt="github" className="icon" />
                </div>
            </div>
            <div className="center">
                <div className="line"/>
                <div className="or">OR</div>
            </div>
            <div className='right'>
                <input type="text"placeholder='username' />
                <input type="password"placeholder='password' />
                <button className='submit'>login</button>
            </div>
        </div>
           

        
    </div>
  )
}

export default Login