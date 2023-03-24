import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const BooksInputs = () => {
  const dispatch = useDispatch();

  return (
    <div className="form-container">
      <p className="title">ADD NEW BOOK</p>
      <form onSubmit={(e) => {
        e.preventDefault();
        const title = e.target.elements.title.value;
        const author = e.target.elements.author.value;
        const payload = {
          item_id: uuidv4(), title, author, category: 'fiction',
        };
        dispatch(addBook(payload)).unwrap();
        e.target.reset();
      }}
      >
        <input className="form-input" type="text" placeholder="Book title.." id="title" required />
        <input className="form-input" type="text" placeholder="Book author..." id="author" required />
        <button className="form-btn" type="submit">Add Book</button>
      </form>
    </div>
  );
};
export default BooksInputs;
