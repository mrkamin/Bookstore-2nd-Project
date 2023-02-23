import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export const NavBar = () => (
    <div className='nav'>
        <div className='nav-title'>
            <h1 className='logo'>Books</h1>
        </div>
        <div className='menubar'>
            <nav className='navbar'>
                <ul className='navbar-list'>
                    <li className='list-item'>
                        <Link to="/">BooksStore</Link>
                    </li>
                    <li className='list-item'>
                        <Link to="/BooksCatagories">BooksCategories</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    </div>
);

