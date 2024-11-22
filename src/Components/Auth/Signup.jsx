import React, { useState } from 'react';
import './Login.css';
import { useAuth } from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const Signup = () => {
  const [formData, setFormData] = useState({
    data: {
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
    errors: {
      username: '',
      email: '',
      password: '',
      passwordConfirm: ''
    },
  });

  const validationSchema = Yup.object({
    username: Yup.string()
      .min(4, 'Name too short. Should be at least 4 characters')
      .max(14, 'Name is too large. Should be less than 14 characters')
      .required('Username is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password should be at least 6 characters')
      .required('Password is required'),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Password confirmation is required'),
  });

  const validateForm = async () => {
    try {
      await validationSchema.validate(formData.data, { abortEarly: false})
      let errors = {}
      return true;
    } catch (validationErrors) {
      debugger
      console.log(validationErrors)
      let errors = formData.errors
      validationErrors.inner.forEach(error => {
        errors[error.path] = error.message
      })

      setFormData({data: formData.data, errors})
      return false;
    }
  }
  const navigate = useNavigate();
  const { login } = useAuth();

  async function submission(e) {
    e.preventDefault();

    let isValid = await validateForm();
    if(isValid){
      console.log('Form is submitted');
      login('Yamah');
      navigate('/home');
    }
  }

  async function inputChange(e) {
    // debugger
    const value = e.target.value;
    const name = e.target.name;
    let data = formData.data;
    let errors = formData.errors;

    data[name] = value;

    try {
      await validationSchema.validateAt(name, data)
      errors[name] = ''
    } catch (validationError) {
      errors[name] = validationError.message
    }

    setFormData({data, errors})
  }

  return (
    <div className="container">
      <main className="form-signin w-100 m-auto">
        <form onSubmit={submission}>
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
              type="text"
              id="username"
              name="username"
              className="form-control"
              placeholder="John Doe"
              value={formData.data.username}
              onChange={inputChange}
              autoComplete='off'
            />
            <label>Username</label>
          </div>
          {formData.errors.username && (
            <div className="alert alert-danger" role="alert">
              {formData.errors.username}
            </div>
          )}
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="email"
              name='email'
              value={formData.email}
              placeholder="name@example.com"
              onChange={inputChange}
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
              name='password'
              onChange={inputChange}
            />
            <label>Password</label>
          </div>
          {formData.errors.password && (
            <div className="alert alert-danger" role="alert">
              {formData.errors.password}
            </div>
          )}
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPasswordConfirmation"
              placeholder="Password Confirmation"
              name='passwordConfirm'
              value={formData.data.passwordConfirm}
              onChange={inputChange}
            />
            <label>Password Confirmation</label>
          </div>
          {formData.errors.passwordConfirm && (
            <div className="alert alert-danger" role="alert">
              {formData.errors.passwordConfirm}
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

export default Signup;
