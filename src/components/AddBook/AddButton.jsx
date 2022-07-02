import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleAddBookAction } from '../../redux/store/reducers/uiReducer';

function AddButton() {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(toggleAddBookAction())} className="add-book-btn">
      <svg className="svg-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60.364 60.364">
        <g>
          <path
            d="M54.454,23.18l-18.609-0.002L35.844,5.91C35.845,2.646,33.198,0,29.934,0c-3.263,0-5.909,2.646-5.909,5.91v17.269
  L5.91,23.178C2.646,23.179,0,25.825,0,29.088c0.002,3.264,2.646,5.909,5.91,5.909h18.115v19.457c0,3.267,2.646,5.91,5.91,5.91
  c3.264,0,5.909-2.646,5.91-5.908V34.997h18.611c3.262,0,5.908-2.645,5.908-5.907C60.367,25.824,57.718,23.178,54.454,23.18z"
          />
        </g>
      </svg>
      add a book
    </button>
  );
}

export default AddButton;
