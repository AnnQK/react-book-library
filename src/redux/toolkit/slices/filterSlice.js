import { createSlice } from '@reduxjs/toolkit';

const initialFilterState = {
  selectedTag: { name: 'Must Read Titles', type: 1 },
  sortType: { name: 'All Books', type: '' },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilterState,
  reducers: {
    setSelectedTag(state, action) {
      state.selectedTag = action.payload;
    },
    setSortType(state, action) {
      state.sortType = action.payload;
    },
  },
});

export const { setSortType, setSelectedTag } = filterSlice.actions;
export default filterSlice.reducer;
