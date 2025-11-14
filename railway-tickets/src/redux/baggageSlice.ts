import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface Baggage {
  priceOfBaggage: number;
  isAdded: boolean;
}

const initialState: Baggage = {
  priceOfBaggage: 0,
  isAdded: false,
};

const baggageSlice = createSlice({
  name: 'baggage',
  initialState,
  reducers: {
    addBaggage: (state, action: PayloadAction<Baggage>) => {
      state.isAdded = action.payload.isAdded;
      state.priceOfBaggage = action.payload.priceOfBaggage;
    },

    cancelBaggage: (state) => {
      state = initialState;
    },
  },
});

export const { addBaggage, cancelBaggage } = baggageSlice.actions;

export default baggageSlice.reducer;
