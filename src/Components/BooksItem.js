import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const BooksItem = ({ item }) => {
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const { title, author, item_id } = item;
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
          // eslint-disable-next-line
          dispatch(removeBook(item_id)).unwrap();
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
