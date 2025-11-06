import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../store';

const selectCityEntities = (state: RootState) => state.cityData.byId;
const selectCityIds = (state: RootState) => state.cityData.allIds;

export const selectAllCitiesArray = createSelector(
  selectCityEntities,
  selectCityIds,
  (byId, allIds) => allIds.map((id) => byId[id])
);

export const selectCityById = createSelector(
  [selectCityEntities, (_, cityId: string) => cityId],
  (byId, cityId) => byId[cityId]
);
