import { DecodeMethodEnum } from 'types/serverTransactions.types';

export const getEventListInitialDecodeMethod = () => {
  const { hash } = window.location;
  const hashValues = hash.split('/');
  const initialDecodeMethod = hashValues[2] ?? DecodeMethodEnum.raw;
  return initialDecodeMethod;
};
