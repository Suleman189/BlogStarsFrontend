import React, { useState } from 'react';
import './Login.css';
import { useAuth } from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    data: {
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
    errors: {
      username: [],
      email: [],
      password: [],
    },
  });

  const navigate = useNavigate();
  const { login } = useAuth();

  function submission(e) {
    console.log('Form is submitted');
    e.preventDefault();

    login('Yamah');
    navigate('/home');
  }

  function inputChange(e) {
    // debugger
    const value = e.target.value;
    const name = e.target.name;
    let data = formData.data;
    let errors = formData.errors;
    debugger
    data[name] = value;
    let password = formData.data.password
    errors = {
      username: [],
      email: [],
      password: [],
    }

    if (name == 'passwordConfirm' && value != password){
        errors['password'].push('Password does not match')
    }
    else if(name == 'username') {
      if (value.length < 4 || value.length > 14) {
        if (value.length < 4 )
          errors[name].push('Name too short. Should be atleast 4 chars')
        else
          errors[name].push('Name is too Large. Should be less than 14 chars')
      }
    }
    else if(name == 'email') {
      let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(value))
        errors[name].push('Invalid email')
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
          {formData.errors.username[0] && (
            <div className="alert alert-danger" role="alert">
              {formData.errors.username[0]}
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
          {formData.errors.email[0] && (
            <div className="alert alert-danger" role="alert">
              {formData.errors.email[0]}
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
          {formData.errors.password[0] && (
            <div className="alert alert-danger" role="alert">
              {formData.errors.password[0]}
            </div>
          )}
          {/* <div className="form-check text-start my-3">
              <input
                className="form-check-input"
                type="checkbox"
                value="remember-me"
                id="flexCheckDefault"
              />
              <label className="form-check-label">
                Remember me
              </label>
            </div> */}
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
