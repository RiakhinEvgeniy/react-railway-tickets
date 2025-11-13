import { configureStore } from '@reduxjs/toolkit';
import formReducer from './formSlice';
import cityReducer from './citiesSlice';
import passengerReducer from './passengerSlice';
import ticketReduser from './ticketsSlice';
import trainReducer from './trainSlice';
import foodReducer from './foodSlice';
import idReducer from './idSlice';
import baggageReducer from './baggageSlice';
import promoReducer from './promoSlice';
import counterReducer from './generalCounter';
import arrayIdsReducer from './arrayIdsSlice';

export const store = configureStore({
  reducer: {
    formData: formReducer,
    cityData: cityReducer,
    passengerData: passengerReducer,
    ticketsData: ticketReduser,
    trainNumberData: trainReducer,
    foodData: foodReducer,
    idData: idReducer,
    baggageData: baggageReducer,
    promoData: promoReducer,
    generalCounterData: counterReducer,
    arrayIdsData: arrayIdsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
