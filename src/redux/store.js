import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/booksSlice';
import categorieReducer from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    booksSlice: bookReducer,
    categoriesSlice: categorieReducer,
  },
});

export default store;
