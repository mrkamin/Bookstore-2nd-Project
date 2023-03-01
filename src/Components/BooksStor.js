import React from 'react';
import { useSelector } from 'react-redux';
import BooksItem from './BooksItem';
import BooksInputs from './BooksInputs';

const BooksSlice = () => {
  const booksSlice = useSelector((store) => store.booksSlice);

  return (
    <>
      {booksSlice.map((bookItem) => (
        <BooksItem
          key={bookItem.id}
          item={bookItem}
        />
      ))}
      <BooksInputs />
    </>
  );
};

export default BooksSlice;
