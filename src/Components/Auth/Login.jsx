import React from 'react';
import './Login.css'
import { useAuth } from '../../Context/AuthContext';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import * as Yup from 'yup'
import httpService from '../../Services/HttpService';

const Login = () => {
  const navigate = useNavigate();
  const {login} = useAuth();
  const [formData, setFormData] = useState({
    data: {
      email: 'suleman.bscs.189@gmail.com',
      password: '123456',
    },
    errors: {
      email: '',
      password: '',
    }
  })

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password should be at least 6 characters')
      .required('Password is required'),
  });

  async function handleSubmission(e) {
    console.log("Form is submitted")
    e.preventDefault()

    let isValid = await validateForm()
    if (isValid) {
      let loginResponse = await httpService.post('/api/login', formData.data)
      console.table(loginResponse)
      if(loginResponse.status == 200) {
        const {message, token} = loginResponse.data
        if (message) login(token)
        navigate('/home');
        alert("you are on Home page")
      }
      alert("This is a valid submission")
    }
    else {
      alert("Invalid submission")
    }
  }
  const validateForm = async () => {

    try {
      await validationSchema.validate(formData.data)
      return true
    } catch (validationErrors) {
      console.log(validationErrors)
      console.table(validationErrors.errors)
      let errors = formData.errors;
      validationErrors.errors.forEach(error => {
        errors[error.path] = error.message
      })

      setFormData({data: formData.data, errors})
      debugger
      return false
    }
  }

  async function handleChange(e) {
    e.preventDefault()

    let value = e.target.value
    let name = e.target.name
    let errors = {email: '', password: ''}
    let data = formData.data
    data[name] = value
    try {
      await validationSchema.validateAt(name, data)
    } catch (error) {
      errors[name] = error.message
    }
    // console.log("DATA--------------------")
    // console.table(formData)

    setFormData({data, errors})
  }
  return (
    <div className="container">
      <main className="form-signin w-100 mx-auto" style={{marginTop: '15vh'}}>
        <div style={{float: 'right'}}>
          <NavLink to='/Signup' className="btn btn-primary btn-sm">Register</NavLink>
        </div>
        <form onSubmit={handleSubmission}>
          <img
            className="mb-4"
            src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
            alt=""
            width="72"
            height="57"
          />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="name@example.com"
              value={formData.data.email}
              onChange={handleChange}
            />
            <label>Email address</label>
          </div>
          {formData.errors.email && (
            <div className="alert alert-danger" role="alert">
              {formData.errors.email}
            </div>
          )}
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              name="password"
              value={formData.data.password}
              onChange={handleChange}
            />
            <label>Password</label>
          </div>
          {formData.errors.password && (
            <div className="alert alert-danger" role="alert">
              {formData.errors.password}
            </div>
          )}

          <button className="btn btn-primary w-100 py-2" type="submit">
            Sign in
          </button>
          <p className="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
        </form>
      </main>
    </div>
  );
};

export default Login;
