import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface Baggage {
  priceOfBaggage: number;
  isAdded: boolean;
}

const initialState: Baggage = {
  priceOfBaggage: 240,
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

    getPriceOfBaggage: (state) => {
      return state;
    },

    cancelBaggage: (state) => {
        state = initialState;
    }
  },
});

export const { addBaggage, getPriceOfBaggage, cancelBaggage } = baggageSlice.actions;

export default baggageSlice.reducer;
