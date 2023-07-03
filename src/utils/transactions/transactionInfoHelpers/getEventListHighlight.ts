import { EventType } from 'types/serverTransactions.types';
import { getWindowLocation } from 'utils/window';

export const getEventListHighlight = (event: EventType, id?: string) => {
  const { hash } = getWindowLocation();
  const hashValues = hash.split('/');
  const formattedHash = hashValues[0] ? hashValues[0].replace('#', '') : '';
  const eventOrder = hashValues[1] ?? 0;

  const highlight = formattedHash === id && event.order === Number(eventOrder);

  return highlight;
};
