import { useMemo, useState, type ReactNode } from 'react';
import { TicketIdContext, type TicketId } from './ticketId';

interface TicketIdProps {
  children: ReactNode;
}

function TicketIdProvider({ children }: TicketIdProps) {
  const [ticketId, setTicketId] = useState<number>(-1);


  const saveTicketId = (id: number) => {
    setTicketId((currentId) => (currentId = id));
  };

  const getTicketId = () => {
    return ticketId;
  };

  const useTicketId: TicketId = useMemo(() => ({
    ticketId,
    saveTicketId,
    getTicketId,
  }), [ticketId]);

  return <TicketIdContext value={useTicketId}>{children}</TicketIdContext>;
}

export default TicketIdProvider;
