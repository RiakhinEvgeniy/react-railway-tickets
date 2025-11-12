import type { ApplyCode } from "../redux/promoSlice";

export function isApplyCode(value: string): value is ApplyCode {
  return value === "BOOKNOW" || value === "FIRSTTIME";
}

// Карта скидок по коду
export const discountMap: Record<ApplyCode, number> = {
  BOOKNOW: 15,
  FIRSTTIME: 10,
};

// Возвращает скидку в процентах
export function getDiscountPercent(code: ApplyCode | null): number {
  return code ? discountMap[code] ?? 0 : 0;
}
