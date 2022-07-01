import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTagAction } from '../redux/store/reducers/filterReducer';

function TagsList() {
  const tags = [
    { name: 'Must Read Titles', type: 1 },
    { name: 'Best Of List', type: 2 },
    { name: 'Classic Novels', type: 3 },
    { name: 'Non Fiction', type: 4 },
  ];
  const selectedTag = useSelector((state) => state.filter.selectedTag);
  const dispatch = useDispatch();

  return (
    <ul className="aside__tags-list">
      {tags.map((tag) => (
        <li key={tag.type} className="aside__tags-item">
          <button
            onClick={() => dispatch(setTagAction(tag))}
            className={selectedTag.name === tag.name ? `btn-tag btn-tag-active` : `btn-tag`}>
            {tag.name}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TagsList;
