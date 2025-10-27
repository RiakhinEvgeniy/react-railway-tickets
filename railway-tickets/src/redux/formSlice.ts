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
    tripType: "",
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
        }
    }
});

export const {setForm} = formSlice.actions;

export default formSlice.reducer;
