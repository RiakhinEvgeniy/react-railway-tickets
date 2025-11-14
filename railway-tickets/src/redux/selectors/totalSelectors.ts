import { getDiscountPercent } from '../../util/discountUtil';
import type { RootState } from '../store';
import { createSelector } from '@reduxjs/toolkit';

export interface TotalPriceDetails {
  baseFare: number;
  foodPrice: number[];
  namesOfDish: string[];
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

const selectBaggagePrice = (state: RootState) =>
  state.baggageData.isAdded
    ? state.baggageData.priceOfBaggage
    : PRICE_BAGGAGE_DEFAULT;

    const selectAmountBaggage = (state: RootState) => state.generalCounterData.amountBaggage;

const selectPromoCode = (state: RootState) => state.promoData.code;

const selectSelectedFoodIds = (state: RootState) => state.arrayIdsData.selectedIds;

// Мемоизированный селектор, который собирает всё вместе
export const selectTotalPriceDetails = createSelector(
  [selectFoodEntities, selectSelectedFoodIds, selectBaggagePrice, selectPromoCode, selectAmountBaggage],
  (foodEntities, selectedFoodIds, baggagePrice, promoCode, amountBaggage): TotalPriceDetails => {

    const selectedFoods = selectedFoodIds.map((id) => foodEntities[id]).filter(Boolean);

    const totalPriceSelectedFoods = selectedFoods.reduce((sum, food) => sum + food.price, 0);

    const pricesOfFood = selectedFoods.map((food) => food.price);

    const namesOfFood = selectedFoods.map((food) => food.nameOfDish);

    const discount = getDiscountPercent(promoCode);

    const DISCOUNT =
      ((BASE_TICKET_FARE + totalPriceSelectedFoods + (baggagePrice * amountBaggage) + CGST_SGST) * discount) /
      100;

    const total =
      BASE_TICKET_FARE + totalPriceSelectedFoods + (baggagePrice * amountBaggage) + CGST_SGST - DISCOUNT;

    return {
      baseFare: BASE_TICKET_FARE,
      foodPrice: pricesOfFood,
      namesOfDish: namesOfFood,
      baggagePrice,
      tax: CGST_SGST,
      discount: DISCOUNT,
      total,
    };
  }
);
