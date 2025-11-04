import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit';
import axios from 'axios';

interface TimeDetails {
  day: string;
  time: string;
  station: string;
}

export interface Ticket {
  id: string;
  transportCompany: string;
  schedule: string;
  totalTime: string;
  ETD: TimeDetails;
  ETA: TimeDetails;
}

export interface TicketState {
  tickets: Ticket[];
  isLoading: boolean;
  error: string | null;
}

const initialState: TicketState = {
  tickets: [],
  isLoading: false,
  error: null,
};

export const fetchTickets = createAsyncThunk<
  Ticket[],
  void,
  { rejectValue: string }
>('tickets/fetchTickets', async (_, { rejectWithValue }) => {
  const API_TICKETS = 'http://localhost:3001/tickets';
  try {
    const response = await axios.get<Ticket[]>(API_TICKETS);
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

const ticketSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(fetchTickets.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        fetchTickets.fulfilled,
        (state, action: PayloadAction<Ticket[]>) => {
          state.tickets = action.payload;
        }
      )
      .addCase(fetchTickets.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string | 'Faild to load tickets';
        state.tickets = [];
      });
  },
});

export default ticketSlice.reducer;
