import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export interface Food {
  id: number;
  price: number;
  nameOfDish: string;
  detailsOfDish: string;
  image: string;
}

export interface FoodState {
  byId: Record<number, Food>;
  allIds: number[];
  isLoading: boolean;
  error: string | null;
}

const initialState: FoodState = {
  byId: {},
  allIds: [],
  isLoading: false,
  error: null,
};

const normalizeFood = (foods: Food[]) => {
  const byId: Record<number, Food> = {};
  const allIds: number[] = [];

  foods.forEach((food) => {
    byId[food.id] = food;
    allIds.push(food.id);
  });
  return { byId, allIds };
};

export const fetchFoods = createAsyncThunk<
  Food[],
  void,
  { rejectValue: string }
>('foods/fetchFoods', async (_, { rejectWithValue }) => {
  const API_URL = 'http://localhost:3001/food';

  try {
    const response = await axios.get<Food[]>(API_URL);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(
        `Error of request (${error.response?.status}): ${error.message}`
      );
    }
    const message =
      error instanceof Error
        ? error.message
        : 'Uknown error for download data from array of food';
    return rejectWithValue(message);
  }
});

const foodSlice = createSlice({
  name: 'foods',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchFoods.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        fetchFoods.fulfilled,
        (state, actioon: PayloadAction<Food[]>) => {
          state.isLoading = true;
          const { byId, allIds } = normalizeFood(actioon.payload);
          state.byId = byId;
          state.allIds = allIds;
        }
      )
      .addCase(fetchFoods.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string | 'Faild to load foods.';
        state.byId = {};
        state.allIds = [];
      });
  },
});
export default foodSlice.reducer;
