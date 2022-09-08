import { EventType } from 'types/serverTransactions.types';

export const getEventListDataHexValue = (event: EventType) => {
  const dataBase64Buffer = Buffer.from(String(event?.data), 'base64');
  const dataHexValue = dataBase64Buffer.toString('hex');
  return dataHexValue;
};
