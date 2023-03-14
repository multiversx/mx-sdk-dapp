import { DecodeMethodEnum } from 'types';

export const getInitialScResultsDecodeMethod = () => {
  const hash = window?.location.hash;

  const initialDecodeMethod =
    hash.indexOf('/') > 0
      ? hash.substring(hash.indexOf('/') + 1)
      : DecodeMethodEnum.raw;

  const isInitialDecodedMethod =
    initialDecodeMethod &&
    Object.values<string>(DecodeMethodEnum).includes(initialDecodeMethod);

  return isInitialDecodedMethod ? initialDecodeMethod : DecodeMethodEnum.raw;
};
