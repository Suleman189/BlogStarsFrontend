import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import './Navbar.css';
const Navbar = () => {
  const location = useLocation();
  const activeRouteColor = (route) => {
    let res = location.pathname == route ? 'active' : '';
    return res;
  };
  const { isAuthenticated, logout } = useAuth();
  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <NavLink
          to="/login"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <svg className="bi me-2" width="40" height="32">
            <use xlinkHref="#bootstrap"></use>
          </svg>
          <span className="fs-4">Star Blogs</span>
        </NavLink>

        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink
              to="/home"
              className={`nav-link ${activeRouteColor('/home')}`}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/Ranked-Stars"
              className={`nav-link ${activeRouteColor('/Ranked-Stars')}`}
            >
              Ranked Stars
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about"
              className={`nav-link ${activeRouteColor('/about')}`}
            >
              About
            </NavLink>
          </li>
          {isAuthenticated && (
            <li className="nav-item">
              <button className="nav-link" onClick={logout}>
                Logout
              </button>
            </li>
          )}
        </ul>
      </header>
    </div>
  );
};

export default Navbar;
