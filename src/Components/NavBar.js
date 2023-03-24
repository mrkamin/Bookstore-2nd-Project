import React from 'react';
import { Outlet, Link } from 'react-router-dom';
// eslint-disable-next-line
import { FaUserAlt } from 'react-icons/fa';

const NavBar = () => (
  <div className="panel-bg flex">
    <div className="nav-head-title flex">
      <div className="nav-title">
        <h1 className="Bookstore-CMS">Bookstore CMS</h1>
      </div>
      <div className="menubar">
        <nav className="navbar">
          <ul className="navbar-list flex">
            <li className="list-item">
              <Link className="books-cms" to="/">Books</Link>
            </li>
            <li className="list-item">
              <Link className="CATEGORIES" to="/bookscatagories">Categories</Link>
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
