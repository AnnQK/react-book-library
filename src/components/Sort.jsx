import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSortAction } from '../redux/store/reducers/filterReducer';

function Sort() {
  const sortType = useSelector((state) => state.filter.sortType);
  const dispatch = useDispatch();
  const sortList = [
    { name: 'All Books', type: '' },
    { name: 'Most Recent', type: 'date' },
    { name: 'Most Popular', type: 'review' },
    { name: 'By Price', type: 'price' },
  ];
  return (
    <div className="filter-btns">
      {sortList.map((item, idx) => (
        <button
          onClick={() => dispatch(setSortAction(item))}
          key={idx}
          className={sortType.name === item.name ? 'filter-btn active-filter-btn' : 'filter-btn'}
          data-func="all">
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default Sort;
