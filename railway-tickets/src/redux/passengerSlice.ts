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
  error: string;
}

const initialState: PassengerState = {
  passenger: {
    fullName: '',
    phoneNumber: '',
    email: '',
    dateOfBirth: '',
  },

  error: '',
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

    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    },
  },
});

export const { addPassenger, updatePassengerField, setError } =
  passengerSlice.actions;

export default passengerSlice.reducer;
