import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import ApiData from '../../Api/ApiData';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/m3Ew74p9k7cFDcNUwaOf/books';
const addBooks = 'addBook';
const removeBooks = 'removeBook';
const getAllBooks = 'getAllBooks';

const initialState = [];

function reducer(store = initialState, action = {}) {
  switch (action.type) {
    case `${addBooks}/fulfilled`:
      return [
        ...store,
        action.payload,
      ];
    case `${removeBooks}/fulfilled`:
      return [
        ...store.filter((bookItem) => bookItem.item_id !== action.payload),
      ];
    case `${getAllBooks}/fulfilled`:
      if (action.payload === '') {
        return [];
      }
      return [
        ...action.payload,
      ];
    default:
      return store;
  }
}

export const getAllBook = createAsyncThunk(getAllBooks,
  async () => {
    const res = await axios.get(baseUrl);
    const payload = ApiData(res?.data);
    return payload;
  });

export const addBook = createAsyncThunk(addBooks,
  async (payload) => {
    await axios.post(baseUrl, payload);
    return payload;
  });

export const removeBook = createAsyncThunk(removeBooks,
  // eslint-disable-next-line
  async (item_id) => {
    // eslint-disable-next-line
    await axios.delete(`${baseUrl}/${item_id}`);
    // eslint-disable-next-line
    return item_id;
  });

export default reducer;
