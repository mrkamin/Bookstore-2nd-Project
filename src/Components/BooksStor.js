import React from 'react';
import { useSelector } from 'react-redux';
import BooksItem from './BooksItem';
import BooksInputs from './BooksInputs';

const BooksSlice = () => {
  const booksSlice = useSelector((store) => store.booksSlice);

  return (
    <>
      <div className="bookstor-sect flex">
        {booksSlice.map((bookItem) => (
          <BooksItem
            key={bookItem.item_id}
            item={bookItem}
          />
        ))}
        <hr />
        <BooksInputs />
      </div>

    </>
  );
};

export default BooksSlice;
