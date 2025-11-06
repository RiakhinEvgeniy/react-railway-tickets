import { createSlice } from '@reduxjs/toolkit';

type NumberTrain = number | 0;

interface NumberTrainState {
  numberOfTrain: NumberTrain;
}

const initialState: NumberTrainState = {
  numberOfTrain: Math.floor(Math.random() * 100000),
};
const trainSlice = createSlice({
  name: 'train',
  initialState,
  reducers: {},
});

export default trainSlice.reducer;
