import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface GeneralCounter {
  amountBaggage: number;
  amountFood: number;
}

const initialState: GeneralCounter = {
  amountBaggage: 0,
  amountFood: 0,
};

const genegalCounter = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addAmount: (state, action: PayloadAction<GeneralCounter>) => {
      state.amountBaggage = action.payload.amountBaggage;
      state.amountFood = action.payload.amountFood;
    },

    getAmountFoodAndBaggage: (state) => {
      return state;
    },

    clearGeneralCounter: (state) => {
      state.amountBaggage = 0;
      state.amountFood = 0;
    },
  },
});

export const { addAmount, getAmountFoodAndBaggage, clearGeneralCounter } =
  genegalCounter.actions;
export default genegalCounter.reducer;
