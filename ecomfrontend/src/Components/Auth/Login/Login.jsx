import React from 'react'
import '../Auth.css'

 const Login = () => {
  return (
    <div className="ContainerLogin">
      <div className= "WrapperLogin">
        <h1>Sign-in...</h1>
        <form id="myloginform">
          <input placeholder="username" />
          <input placeholder="password" />
          <button>SIGN-IN</button>
        </form>
      </div>
    </div>
  )
}

export default Login