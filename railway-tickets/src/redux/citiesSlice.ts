import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import axios from "axios";

interface City {
  id: string;
  name: string;
  alias: string;
}

interface CityState {
  cities: City[];
}

const initialState: CityState = {
  cities: [],
};

export const fetchCities = createAsyncThunk<
  City[],
  void,
  { rejectValue: string }
>("cities/fetchCities", async (_, { rejectWithValue }) => {

  const API_URL = "http://localhost:3001/cities";

  try {
    const response = await axios.get<City[]>(API_URL);
    return response.data;

  } catch (error) {
    if(axios.isAxiosError(error)) {
        return rejectWithValue(`Error of request (${error.response?.status}): ${error.message}`)
    }
    const message =
      error instanceof Error ? error.message : "Uknown error for download data";
    return rejectWithValue(message);
  }
});

const citySlice = createSlice({
  name: "cities",
  initialState,
  reducers: {},
   
    extraReducers: (builder) => {
        builder.addCase(fetchCities.fulfilled, (state, action: PayloadAction<City[]>) => {
            state.cities = action.payload;
        })
    }
});

export const {} = citySlice.actions;

export default citySlice.reducer;
