import React, {useContext,useEffect} from 'react'
import { useForm } from 'react-hook-form'
import { LoginContextObj } from '../contexts/LoginContext.jsx'
import {useNavigate} from 'react-router-dom'
function Login() {

  const {register,handleSubmit}=useForm()
  const {  currentUser,
    setCurrentUser,
    userLoginStatus,
    setUserLoginStatus,
    loginErr,
    setLoginErr,
    login} =useContext(LoginContextObj)

  const navigate=useNavigate();

  function onLoginSubmit(userCredObj){
  console.log(userCredObj)
  //call login function of loginContext
  login(userCredObj);

}

useEffect(()=>{
  if(userLoginStatus===true){
    //navigate profile
    if(currentUser.userType==="user"){
      navigate("/user-profile")
    }
    if(currentUser.userType==="seller"){
      navigate("/seller-profile")
    }
    if(currentUser.userType==="admin"){
      navigate("/admin-profile")
    }
  }

},[userLoginStatus]);

return (
    <div>
      <h1 className="display-3 text-info text-center">Login here</h1>

      {/* display login error message */}
      {
        loginErr!=null &&<p className='text-danger text-center fs-1'>{loginErr.message}</p>
      }
      
    <form className="w-50 my-5 mx-auto bg-light p-5" onSubmit={handleSubmit(onLoginSubmit)}>
        {/* Role Selection */}
        <div className="mb-3">
          <label className="form-label">Select a Role</label>
          <div className="form-check">
            <input type="radio" {...register('userType', { required: true })} id="user" className="form-check-input" value="user" />
            <label htmlFor="user" className="form-check-label">User</label>
          </div>
          <div className="form-check">
            <input type="radio" {...register('userType', { required: true })} id="seller" className="form-check-input" value="seller" />
            <label htmlFor="seller" className="form-check-label">Seller</label>
          </div>
          <div className="form-check">
            <input type="radio" {...register('userType', { required: true })} id="admin" className="form-check-input" value="admin" />
            <label htmlFor="admin" className="form-check-label">Admin</label>
          </div>
          {/* {errors.userType && <p className="text-danger">Role is required</p>} */}
        </div>

        {/* Username */}
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            {...register('username', { required: true, minLength: 3 })}
            id="username"
            className="form-control"
          />
          {/* {errors.username && <p className="text-danger">Username is required and should be at least 3 characters long</p>} */}
        </div>

        {/* Password */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            {...register('password', { required: true, minLength: 4 })}
            id="password"
            className="form-control"
          />
          {/* {errors.password && <p className="text-danger">Password is required and should be at least 4 characters long</p>} */}
        </div>

        

        <button className="btn btn-success ">Login</button>
      </form>
      </div>
  )
}

export default Login