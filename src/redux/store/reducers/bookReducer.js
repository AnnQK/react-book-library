const defaultState = {
  books: [],
};

const ADD_BOOK = 'ADD_BOOK';
const FETCH_BOOK = 'FETCH_BOOK';

export const bookReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_BOOK:
      return { ...state, books: action.payload };
    case ADD_BOOK:
      return { ...state, books: [action.payload, ...state.books] };
    default:
      return state;
  }
};

export const addBookAction = (payload) => {
  return {
    type: ADD_BOOK,
    payload,
  };
};
export const fetchBooksAction = (payload) => {
  return {
    type: FETCH_BOOK,
    payload,
  };
};
