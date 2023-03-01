import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const BooksItem = ({ item }) => {
  const dispatch = useDispatch();
  const { title, author, id } = item;
  return (
    <>
      <div>
        <h2>{title}</h2>
        <h3>{author}</h3>
      </div>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          dispatch(removeBook(id));
        }}
      >
        Remove
      </button>
    </>
  );
};

BooksItem.propTypes = {
  item: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default BooksItem;
