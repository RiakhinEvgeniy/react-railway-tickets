import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit';
import axios from 'axios';

interface City {
  id: string;
  name: string;
  alias: string;
}

interface CityState {
  byId: Record<string, City>;
  allIds: string[];
  isLoading: boolean;
  error: string | null;
}

const initialState: CityState = {
  byId: {},
  allIds: [],
  isLoading: false,
  error: null,
};

const normalizeCities = (cities: City[]) => {
  const byId: Record<string, City> = {};
  const allIds: string[] = [];

  cities.forEach((city) => {
    byId[city.id] = city;
    allIds.push(city.id);
  });
  return { byId, allIds };
};

export const fetchCities = createAsyncThunk<
  City[],
  void,
  { rejectValue: string }
>('cities/fetchCities', async (_, { rejectWithValue }) => {
  const API_URL = 'http://localhost:3001/cities';

  try {
    const response = await axios.get<City[]>(API_URL);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(
        `Error of request (${error.response?.status}): ${error.message}`
      );
    }
    const message =
      error instanceof Error ? error.message : 'Uknown error for download data';
    return rejectWithValue(message);
  }
});

const citySlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    resetSitiesState: (state) => {
      state = initialState;
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCities.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        fetchCities.fulfilled,
        (state, action: PayloadAction<City[]>) => {
          state.isLoading = true;

          const { byId, allIds } = normalizeCities(action.payload);

          state.byId = byId;
          state.allIds = allIds;
        }
      )
      .addCase(fetchCities.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string | 'Faild to load cities.';
        state.byId = {};
        state.allIds = [];
      });
  },
});

export const { resetSitiesState } = citySlice.actions;

export default citySlice.reducer;
