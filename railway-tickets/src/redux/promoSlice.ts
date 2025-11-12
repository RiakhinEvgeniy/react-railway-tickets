import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type ApplyCode = 'BOOKNOW' | 'FIRSTTIME';

interface PromoState {
  code: ApplyCode | null;
  currentPromo: string;
}

const initialState: PromoState = {
  code: null,
  currentPromo: '',
};

const promoSlice = createSlice({
  name: 'promo',
  initialState,
  reducers: {
    setPromoCode: (state, action: PayloadAction<ApplyCode>) => {
      state.code = action.payload;
    },

    saveCurrentPromo: (state, action: PayloadAction<string>) => {
      state.currentPromo = action.payload;
    },

    getCurrentPromo: (state) => {
      state.currentPromo;
    },

    clearPromo: (state) => {
      state.code = null;
    },
  },
});

export const { setPromoCode, saveCurrentPromo, getCurrentPromo, clearPromo } =
  promoSlice.actions;

export default promoSlice.reducer;
