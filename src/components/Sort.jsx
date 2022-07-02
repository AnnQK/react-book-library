import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSortAction } from '../redux/store/reducers/filterReducer';

function Sort() {
  const { sortList, sortType } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  return (
    <div className="filter-btns">
      {sortList.map((item, idx) => (
        <button
          onClick={() => dispatch(setSortAction(item))}
          key={idx}
          className={sortType.name === item.name ? 'filter-btn filter-btn-active' : 'filter-btn'}
          data-func="all">
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default Sort;
