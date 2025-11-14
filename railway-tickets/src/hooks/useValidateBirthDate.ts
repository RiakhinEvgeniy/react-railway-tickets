import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../redux/store';
import { setError } from '../redux/passengerSlice';
import { calculateAge } from '../util/calculateAge';

const MIN_AGE = 0;
const MAX_AGE = 110;
const DATE_FORMAT = /^\d{2}\.\d{2}\.\d{4}$/;

export function useValidateBirthDate() {
  const dispatch = useDispatch<AppDispatch>();

  return (birthDate: string) => {
    if (!DATE_FORMAT.test(birthDate)) {
      dispatch(setError('Enter date in the format DD.MM.YYYY'));
      return;
    }

    const [day, month, year] = birthDate.split('.').map(Number);
    if (month < 1 || month > 12) {
      dispatch(setError('The month must be from 1 to 12'));
      return;
    }

    const daysInMonth = new Date(year, month - 1, 0).getDate();
    if (day < 1 || day > daysInMonth) {
      dispatch(setError(`There are ${daysInMonth} days in month ${month}`));
      return;
    }

    const inputDate = new Date(year, month - 1, day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (inputDate > today) {
      dispatch(setError('Birth date should not be in the future'));
      return;
    }

    const age = calculateAge(birthDate);
    if (age < MIN_AGE || age > MAX_AGE) {
      dispatch(setError('Check your year of birth'));
      return;
    }

    dispatch(setError(''));
  };
}
