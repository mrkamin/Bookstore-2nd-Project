import React from 'react';
import { Outlet, Link } from 'react-router-dom';
// eslint-disable-next-line
import { FaUserAlt } from 'react-icons/fa';

const NavBar = () => (
  <div className="nav">
    <div className="nav-head-title">
      <div className="nav-title">
        <h1 className="logo">Books</h1>
      </div>
      <div className="menubar">
        <nav className="navbar">
          <ul className="navbar-list">
            <li className="list-item">
              <Link to="/">BooksStore</Link>
            </li>
            <li className="list-item">
              <Link to="/bookscatagories">BooksCategories</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    </div>
    <FaUserAlt className="icons" />
  </div>
);
export default NavBar;
