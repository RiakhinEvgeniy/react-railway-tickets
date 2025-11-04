import { useEffect } from 'react';
import { fetchTickets } from '../redux/ticketsSlice';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../redux/store';

function loadTickets() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchTickets());
  }, [dispatch]);
}

export default loadTickets;
