import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTagAction } from '../redux/store/reducers/filterReducer';

function TagsList() {
  const { selectedTag, tagList } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  return (
    <ul className="aside__tags-list">
      {tagList.map((tag) => (
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
