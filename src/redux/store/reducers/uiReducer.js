const defaultState = {
  isLoading: false,
  notification: null,
  addBookModal: false,
  bookInfoModal: false,
};

const START_LOADING = "START_LOADING";
const STOP_LOADING = "STOP_LOADING";
const TOGGLE_ADD_BOOK_MODAL = "TOGGLE_ADD_BOOK_MODAL";
const TOGGLE_BOOK_INFO_MODAL = "TOGGLE_BOOK_INFO_MODAL";

export const uiReducer = (state = defaultState, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case STOP_LOADING:
      return { ...state, isLoading: false };
    case TOGGLE_ADD_BOOK_MODAL:
      return { state, addBookModal: !state.addBookModal };
    case TOGGLE_BOOK_INFO_MODAL:
      return { state, bookInfoModal: !state.bookInfoModal };
    default:
      return state;
  }
};

export const startLoadAction = () => {
  return {
    type: START_LOADING,
  };
};
export const stopLoadAction = () => {
  return {
    type: STOP_LOADING,
  };
};
export const toggleAddBookAction = () => {
  return {
    type: TOGGLE_ADD_BOOK_MODAL,
  };
};
export const toggleFullInfoAction = () => {
  return {
    type: TOGGLE_BOOK_INFO_MODAL,
  };
};
