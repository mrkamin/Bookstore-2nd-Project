import { v4 as uuidv4 } from 'uuid';

const addBooks = 'book/booksSlice/addBook';
const removeBooks = 'book/booksSlice/removeBook';

const initialState = [];
function reducer(store = initialState, action = {}) {
  switch (action.type) {
    case addBooks:
      return [
        ...store,
        {
          title: action.load.title,
          author: action.load.author,
          id: uuidv4(),
        },
      ];
    case removeBooks:
      return [
        ...store.filter((bookItem) => bookItem.id !== action.id),
      ];
    default:
      return store;
  }
}

export const addBook = (load) => ({ type: addBooks, load });

export const removeBook = (id) => ({ type: removeBooks, id });

export default reducer;
