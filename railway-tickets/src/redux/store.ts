import { configureStore } from '@reduxjs/toolkit';
import formReducer from './formSlice';
import cityReducer from './citiesSlice';
import passengerReducer from './passengerSlice';

export const store = configureStore({
  reducer: {
    form: formReducer,
    cityData: cityReducer,
    passengerData: passengerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
