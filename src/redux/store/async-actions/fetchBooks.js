import { fetchBooksAction } from '../reducers/bookReducer';
import { startLoadAction, stopLoadAction } from '../reducers/uiReducer';
import axios from 'axios';

export const fetchBooks = () => {
  return (dispatch) => {
    dispatch(startLoadAction());
    axios.get(`https://book-library-d7107-default-rtdb.firebaseio.com/books.json`).then((res) => {
      dispatch(stopLoadAction());
      dispatch(fetchBooksAction(res.data));
    });
  };
};
