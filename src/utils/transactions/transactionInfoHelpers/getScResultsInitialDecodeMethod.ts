import { DecodeMethodEnum } from 'types';
import { getWindowLocation } from 'utils/window/getWindowLocation';

export const getInitialScResultsDecodeMethod = () => {
  const { hash } = getWindowLocation();

  const initialDecodeMethod =
    hash.indexOf('/') > 0
      ? hash.substring(hash.indexOf('/') + 1)
      : DecodeMethodEnum.raw;

  const isInitialDecodedMethod =
    initialDecodeMethod &&
    Object.values<string>(DecodeMethodEnum).includes(initialDecodeMethod);

  return isInitialDecodedMethod ? initialDecodeMethod : DecodeMethodEnum.raw;
};
