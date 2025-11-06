import { configureStore } from '@reduxjs/toolkit';
import formReducer from './formSlice';
import cityReducer from './citiesSlice';
import passengerReducer from './passengerSlice';
import ticketReduser from './ticketsSlice';
import trainReducer from './trainSlice';

export const store = configureStore({
  reducer: {
    formData: formReducer,
    cityData: cityReducer,
    passengerData: passengerReducer,
    ticketsData: ticketReduser,
    trainNumberData: trainReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
