import React from 'react'
import '../Auth.css'

 const Register = () => {
  return (
    <div className="ContainerRegister">
      <div className="WrapperRegister">
        <h1>Register Your Account Here</h1>
        <form id="myform">
          <input placeholder="First Name.." />
          <input placeholder="Last Name.." />
          <input placeholder="Username.." />
          <input placeholder="Email.." />
          <input placeholder="Password.." />
          <input placeholder="Confirm Password.." />
          <button>Register</button>
        </form>
      </div>
    </div>
  )
}




export default Register