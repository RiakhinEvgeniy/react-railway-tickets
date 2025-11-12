import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type Id = string | number | null;

export interface IdState {
  idObject: Id;
}

const initialState: IdState = {
  idObject: null,
};

const idSlice = createSlice({
  name: 'id',
  initialState,
  reducers: {
    saveId: (state, action: PayloadAction<IdState>) => {
      state.idObject = action.payload.idObject;
    },

    getId: (state) => {
      return state;
    },

    clearId: (state) => {
      state.idObject = initialState.idObject;
    },
  },
});

export const { saveId, getId, clearId } = idSlice.actions;

export default idSlice.reducer;
