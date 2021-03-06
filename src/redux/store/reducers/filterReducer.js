const defaultState = {
  tagList: [
    { name: "Must Read Titles", type: 1 },
    { name: "Best Of List", type: 2 },
    { name: "Classic Novels", type: 3 },
    { name: "Non Fiction", type: 4 },
  ],
  sortList: [
    { name: "All Books", type: "" },
    { name: "Most Recent", type: "date" },
    { name: "Most Popular", type: "review" },
    { name: "By Price", type: "price" },
  ],
  selectedTag: { name: "", type: "" },
  sortType: { name: "All Books", type: "" },
  searchValue: "",
};

const SET_SELECTED_TAG = "SET_SELECTED_TAG";
const SET_SORT_TYPE = "SET_SORT_TYPE";
const SET_SEARCH_VALUE = "SET_SEARCH_VALUE";

export const filterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_SEARCH_VALUE:
      return { ...state, searchValue: action.payload };
    case SET_SELECTED_TAG:
      return { ...state, selectedTag: { ...action.payload } };
    case SET_SORT_TYPE:
      return { ...state, sortType: { ...action.payload } };
    default:
      return state;
  }
};

export const setTagAction = (payload) => {
  return {
    type: SET_SELECTED_TAG,
    payload,
  };
};
export const setSortAction = (payload) => {
  return {
    type: SET_SORT_TYPE,
    payload,
  };
};
export const setSearchAction = (payload) => {
  return {
    type: SET_SEARCH_VALUE,
    payload,
  };
};
