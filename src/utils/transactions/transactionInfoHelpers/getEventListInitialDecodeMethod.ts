import { DecodeMethodEnum } from 'types/serverTransactions.types';
import { getWindowLocation } from 'utils/window';

export const getEventListInitialDecodeMethod = () => {
  const hash = getWindowLocation('hash');
  const hashValues = hash.split('/');
  const initialDecodeMethod = hashValues[2] ?? DecodeMethodEnum.raw;
  return initialDecodeMethod;
};
