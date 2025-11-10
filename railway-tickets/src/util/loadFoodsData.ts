import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../redux/store';
import { useEffect } from 'react';
import { fetchFoods } from '../redux/foodSlice';

function loadFoodsDataFromDB() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchFoods());
  }, [dispatch]);
}

export default loadFoodsDataFromDB;
