import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../store';

const selectFoodEntities = (state: RootState) => state.foodData.byId;
const selectFoodIds = (state: RootState) => state.foodData.allIds;

export const selectAllFoodsArray = createSelector(
  selectFoodEntities,
  selectFoodIds,
  (byId, allIds) => allIds.map((id) => byId[id])
);

export const selectFoodById = createSelector(
  [selectFoodEntities, (_, foodId: number) => foodId],
  (byId, foodId) => byId[foodId]
);
