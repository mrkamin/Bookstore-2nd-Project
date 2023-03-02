import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkCurentStatus } from '../redux/categories/categoriesSlice';

const CategoriesSlice = () => {
  const dispatch = useDispatch();

  const categoriesSlice = useSelector((store) => store.categoriesSlice);

  return (
    <>
      <div className="booksCategor-container">
        <hr />
        <div>
          <h4 className="bookcategory-status">{categoriesSlice}</h4>
        </div>
        <button
          className="bookcategory-btn"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            dispatch(checkCurentStatus());
          }}
        >
          Check Status
        </button>
      </div>
    </>
  );
};

export default CategoriesSlice;
