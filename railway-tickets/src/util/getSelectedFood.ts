import { useSelector } from 'react-redux';
import type { RootState } from '../redux/store';
import { selectFoodById } from '../redux/selectors/foodSelectors';

function getSelectedFood() {
  const foodId = useSelector((state: RootState) => state.idData.idObject);
  if (foodId !== -1) {
    const food = useSelector((state) =>
      selectFoodById(state, foodId as number)
    );
    return food;
  }
}
export default getSelectedFood;
