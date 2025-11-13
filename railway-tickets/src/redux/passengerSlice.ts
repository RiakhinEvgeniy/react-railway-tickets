import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface PassengerInfo {
  fullName: string;
  phoneNumber: string;
  email: string;
  dateOfBirth: string;
}

interface UpdatePassengerPayload {
  field: keyof PassengerInfo;
  value: string;
}

export interface PassengerState {
  passenger: PassengerInfo;
}

const initialState: PassengerState = {
  passenger: {
    fullName: '',
    phoneNumber: '',
    email: '',
    dateOfBirth: '',
  },
};

const passengerSlice = createSlice({
  name: 'passenger',
  initialState,
  reducers: {
    addPassenger: (state, action: PayloadAction<PassengerInfo>) => {
      state.passenger = action.payload;
    },

    updatePassengerField: (
      state,
      action: PayloadAction<UpdatePassengerPayload>
    ) => {
      state.passenger[action.payload.field] = action.payload.value;
    },

    getPassengerInfo: (state) => {
      return state;
    },
  },
});

export const { addPassenger, updatePassengerField, getPassengerInfo } =
  passengerSlice.actions;

export default passengerSlice.reducer;
