import React from 'react'


const Login = () => {

    const google=()=>{
        window.open("http://localhost:5000/auth/google/callback","_self")
    }
  return (
    <div className='login'>
        <h1 className="loginTitle">login</h1>
        
        <div className="wrapper">
            <div className="left">
            <div className="loginButton google"onClick={google}>
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