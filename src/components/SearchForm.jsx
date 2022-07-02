import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchAction } from '../redux/store/reducers/filterReducer';
function SearchFrom() {
  const searchValue = useSelector((state) => state.filter.searchValue);
  const dispatch = useDispatch();
  return (
    <form className="filter-form">
      <input
        value={searchValue}
        onChange={(e) => dispatch(setSearchAction(e.target.value))}
        type="text"
        className="input-keywords"
        name="keywords"
        id="input-keywords"
        placeholder="Enter Keywords"
      />
      {searchValue && (
        <svg
          onClick={() => dispatch(setSearchAction(''))}
          className="filter-form__logo"
          height="512px"
          version="1.1"
          viewBox="0 0 512 512"
          width="512px"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z" />
        </svg>
      )}
    </form>
  );
}

export default SearchFrom;
