import { createContext, useContext } from 'react';

export interface TicketId {
  ticketId: number;
  saveTicketId: (id: number) => void;
  getTicketId: () => number;
}

export const TicketIdContext = createContext<TicketId | undefined>(undefined!);
export const useTicketId = (): TicketId => {
  const id = useContext(TicketIdContext);
  if (id === undefined) {
    throw new Error('useCounter must using in TicketIdProvider');
  }
  return id;
};
