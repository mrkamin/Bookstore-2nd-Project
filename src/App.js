import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// styleSheet
import './App.css';

// components
import NavBar from './Components/NavBar';
import BooksSlice from './Components/BooksStor';
import BooksCatagories from './Components/BooksCategories';
import { getAllBook } from './redux/books/booksSlice';

function App() {
  const dispatch = useDispatch();
  dispatch(getAllBook()).unwrap();
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<BooksSlice />} />
          <Route path="bookscatagories" element={<BooksCatagories />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
