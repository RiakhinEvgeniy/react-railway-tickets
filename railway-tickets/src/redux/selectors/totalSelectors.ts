import type { RootState } from '../store';
import { createSelector } from '@reduxjs/toolkit';
import { selectFoodById } from './foodSelectors';

export interface TotalPriceDetails {
  baseFare: number;
  foodPrice: number;
  nameOfDish: string | undefined;
  baggagePrice: number;
  tax: number;
  discount: number;
  total: number;
}

// фиксированные значения
const BASE_TICKET_FARE = 500;
const CGST_SGST = 400;
const DISCOUNT = 0;
const PRICE_BAGGAGE_DEFAULT = 0;

const selectFoodId = (state: RootState) => state.idData.idObject;

const selectBaggagePrice = (state: RootState) =>
  state.baggageData.isAdded
    ? state.baggageData.priceOfBaggage
    : PRICE_BAGGAGE_DEFAULT;

// Мемоизированный селектор, который собирает всё вместе
export const selectTotalPriceDetails = createSelector(
  [selectFoodId, selectBaggagePrice, (state: RootState) => state],
  (foodId, baggagePrice, state): TotalPriceDetails => {
    // получаем блюдо (foodSelector — это функция)
    const food = foodId !== -1 ? selectFoodById(state, foodId as number) : undefined;

    const foodPrice = food ? food.price : 0;

    const total =
      BASE_TICKET_FARE + foodPrice + baggagePrice + CGST_SGST - DISCOUNT;

    return {
      baseFare: BASE_TICKET_FARE,
      foodPrice,
      nameOfDish: food?.nameOfDish,
      baggagePrice,
      tax: CGST_SGST,
      discount: DISCOUNT,
      total,
    };
  }
);
