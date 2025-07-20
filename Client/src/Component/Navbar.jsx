import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
       <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        {/* Logo on the left */}
        <Link className="navbar-brand text-danger fw-bold fs-3" to="/">Movies</Link>

        {/* Centered navigation links */}
        <div className="mx-auto">
          <ul className="navbar-nav d-flex flex-row gap-3">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/add-movie">Add Movie</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/movies">All Movie</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/register">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
