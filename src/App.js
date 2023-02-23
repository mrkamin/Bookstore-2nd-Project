import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// styleSheet
import './App.css';

// components
import NavBar from './Components/NavBar';
import BooksStore from './Components/BooksStor';
import BooksCatagories from './Components/BooksCategories';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<BooksStore />} />
          <Route path="bookcatagories" element={<BooksCatagories />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
