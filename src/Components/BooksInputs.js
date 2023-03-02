import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const BooksInputs = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        const title = e.target.elements.title.value;
        const author = e.target.elements.author.value;
        const payload = { title, author, id: uuidv4() };
        dispatch(addBook(payload));
        e.target.reset();
      }}
      >
        <input type="text" placeholder="Book title.." id="title" required />
        <input type="text" placeholder="Book author..." id="author" required />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};
export default BooksInputs;
