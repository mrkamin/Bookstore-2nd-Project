import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkCurentStatus } from '../redux/categories/categoriesSlice';

const CategoriesSlice = () => {
  const dispatch = useDispatch();

  const categoriesSlice = useSelector((store) => store.categoriesSlice);

  return (
    <>
      <div>
        <hr />
        <div>
          <h5>{categoriesSlice}</h5>
        </div>
        <button
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
