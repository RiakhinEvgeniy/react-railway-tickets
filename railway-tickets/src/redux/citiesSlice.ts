import { createSlice } from "@reduxjs/toolkit";

interface City {
    id:string;
    name: string;
    alias: string;
}

interface CityState {
    cities: City[];
}

const initialState: CityState = {
    cities: []
} 

const citySlice = createSlice({
    name: "cities",
    initialState,
    reducers: {
        
    }
});

export default citySlice.reducer;