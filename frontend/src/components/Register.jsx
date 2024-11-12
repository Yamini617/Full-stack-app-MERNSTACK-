import { useState } from 'react';

import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  async function onFormSubmit(userObj) {
    console.log(userObj);
    
      const res = await axios.post('http://localhost:3000/api/register', userObj);
      //console.log("res", res);
      if (res.status === 201) {
        navigate('/login');
      } else {
        setErrorMessage(res.data.message);
      }
    
  }

  return (
    <div>
      <h1 className="display-3 text-info text-center">Register here</h1>
      
      {/* Display error messages */}
      {errorMessage.length !== 0 && <p className="text-danger text-center">{errorMessage}</p>}

      <form className="w-50 my-5 mx-auto bg-light p-5" onSubmit={handleSubmit(onFormSubmit)}>
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
          {errors.userType && <p className="text-danger">Role is required</p>}
        </div>

        {/* Username */}
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            {...register('username', { required: true, minLength: 4 })}
            id="username"
            className="form-control"
          />
          {errors.username && <p className="text-danger">Username is required and should be at least 3 characters long</p>}
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
          {errors.password && <p className="text-danger">Password is required and should be at least 6 characters long</p>}
        </div>

        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            {...register('email', { required: true })}
            id="email"
            className="form-control"
          />
          {errors.email && <p className="text-danger">Valid email is required</p>}
        </div>

        {/* City */}
        <div className="mb-3">
          <label htmlFor="city" className="form-label">City</label>
          <input
            type="text"
            {...register('address.city', { required: true })}
            id="city"
            className="form-control"
          />
          {errors.address?.city && <p className="text-danger">City is required</p>}
        </div>

        {/* Pincode */}
        <div className="mb-3">
          <label htmlFor="pincode" className="form-label">Pincode</label>
          <input
            type="number"
            {...register('address.pincode', { required: true })}
            id="pincode"
            className="form-control"
          />
          {errors.address?.pincode && <p className="text-danger">Pincode is required</p>}
        </div>

        <button className="btn btn-success">Register</button>
      </form>
    </div>
  );
}

export default Register;