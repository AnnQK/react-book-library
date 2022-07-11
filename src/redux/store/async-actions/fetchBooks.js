import { fetchBooksAction } from "../reducers/bookReducer";
import { startLoadAction, stopLoadAction } from "../reducers/uiReducer";
import axios from "axios";

export const fetchBooks = (sort, tagType, searchValue) => {
  return (dispatch) => {
    dispatch(startLoadAction());
    const tag = tagType > 0 ? `&tag=${tagType}` : "";
    const search =
      searchValue.trim().length > 0 ? `&search=${searchValue}` : "";
    axios
      .get(
        `https://62c5d2c9134fa108c25d68d3.mockapi.io/books?${tag}&sortBy=${sort}&order=desc${search}`
      )
      .then((res) => {
        dispatch(stopLoadAction());
        dispatch(fetchBooksAction(res.data));
      });
  };
};
