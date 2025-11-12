import { getDiscountPercent } from '../../util/discountUtil';
import type { RootState } from '../store';
import { createSelector } from '@reduxjs/toolkit';

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
const BASE_TICKET_FARE = 100;
const CGST_SGST = 400;
const PRICE_BAGGAGE_DEFAULT = 0;

const selectFoodEntities = (state: RootState) => state.foodData.byId;

const selectFoodId = (state: RootState) => state.idData.idObject;

const selectBaggagePrice = (state: RootState) =>
  state.baggageData.isAdded
    ? state.baggageData.priceOfBaggage
    : PRICE_BAGGAGE_DEFAULT;

const selectPromoCode = (state: RootState) => state.promoData.code;

// Мемоизированный селектор, который собирает всё вместе
export const selectTotalPriceDetails = createSelector(
  [selectFoodEntities, selectFoodId, selectBaggagePrice, selectPromoCode],
  (foodEntities, foodId, baggagePrice, promoCode): TotalPriceDetails => {
    
    const key = foodId != null ? foodId : null;

    const food = key ? foodEntities[key as number] : undefined;

    const foodPrice = food ? food.price : 0;

    const discount = getDiscountPercent(promoCode);

    const DISCOUNT =
      ((BASE_TICKET_FARE + foodPrice + baggagePrice + CGST_SGST) * discount) /
      100;

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
