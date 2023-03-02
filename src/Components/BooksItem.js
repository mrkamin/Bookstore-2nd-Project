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
      <div className="books-item-container">
        <div className="books-item-title">
          <div>
            <p className="books-item-category">Fiction</p>
            <p className="books-title">{title}</p>
            <p className="books-item-author">{author}</p>
          </div>
          <div className="books-item-btns">
            <button className="books-item-btns" type="button">Comments</button>
            <button
              className="books-item-btns"
              type="button"
              onClick={(e) => {
                e.preventDefault();
                // eslint-disable-next-line
          dispatch(removeBook(item_id)).unwrap();
              }}
            >
              Remove
            </button>
            <button className="books-item-btns" type="button">Edit</button>
          </div>
        </div>
        <div className="books-item-progress-container">
          <div className="books-item-progress-section">
            <div className="books-item-progress-circular" />
            <div>
              <p className="books-item-progress-percent">65%</p>
              <p className="books-item-progress-span">Copleted</p>
            </div>
          </div>
          <div className="books-item-progress-sect-divider" />
          <div className="books-item-progress-chap-sect">
            <span className="chap-title">CURRENT CHAPTER</span>
            <p className="chap-num">Chapter 10</p>
            <button type="button" className="books-item-updat-prog-btn">UPDATE</button>
          </div>
        </div>
      </div>
    </>
  );
};

BooksItem.propTypes = {
  item: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default BooksItem;
