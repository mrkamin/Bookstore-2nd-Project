const addBooks = 'addBook';
const removeBooks = 'removeBook';

const initialState = [
  {
    id: 1,
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Fiction',
  },
  {
    id: 2,
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction',
  },
  {
    id: 3,
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Nonfiction',
  },
];

function reducer(store = initialState, action = {}) {
  switch (action.type) {
    case addBooks:
      return [
        ...store,
        action.payload,
      ];
    case removeBooks:
      return [
        ...store.filter((bookItem) => bookItem.id !== action.id),
      ];
    default:
      return store;
  }
}

export const addBook = (payload) => ({ type: addBooks, payload });

export const removeBook = (id) => ({ type: removeBooks, id });

export default reducer;
