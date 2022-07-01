const defaultState = {
  isLoading: false,
  notification: null,
};

const START_LOADING = 'START_LOADING';
const STOP_LOADING = 'STOP_LOADING';

export const uiReducer = (state = defaultState, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case STOP_LOADING:
      return { ...state, isLoading: false };
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
