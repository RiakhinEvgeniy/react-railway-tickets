import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type TripType = "oneway" | "round" | "";

export interface FormData {
  tripType: TripType;
  fromCity: string;
  toCity: string;
  departureDate: string;
  returnDate: string;
}

const initialState: FormData = {
    tripType: "round",
    fromCity: "",
    toCity: "",
    departureDate: "",
    returnDate: ""
}

const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        setForm: (state, action: PayloadAction<FormData>) => {
            state.fromCity = action.payload.fromCity;
            state.tripType = action.payload.tripType;
            state.departureDate = action.payload.departureDate;
            state.toCity = action.payload.toCity;
            state.returnDate = action.payload.returnDate;
        },

        setTripType: (state, action: PayloadAction<TripType>) => {
            state.tripType = action.payload;
        }
    }
});

export const {setForm, setTripType} = formSlice.actions;

export default formSlice.reducer;
