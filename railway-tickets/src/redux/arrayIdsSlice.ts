import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface ArrayIdState {
  selectedIds: number[];
}

const initialState: ArrayIdState = {
  selectedIds: [],
};

const arrayIdsSlice = createSlice({
  name: 'arrayIds',
  initialState,
  reducers: {
    addId: (state, action: PayloadAction<number>) => {
      if (!state.selectedIds.includes(action.payload)) {
        state.selectedIds.push(action.payload);
      }
    },
    removeId: (state, action: PayloadAction<number>) => {
      state.selectedIds = state.selectedIds.filter(id => id !== action.payload);
    },
    clearAllIds: (state) => {
      state.selectedIds = [];
    },
  },
});

export const { addId, removeId, clearAllIds } = arrayIdsSlice.actions;
export default arrayIdsSlice.reducer;
