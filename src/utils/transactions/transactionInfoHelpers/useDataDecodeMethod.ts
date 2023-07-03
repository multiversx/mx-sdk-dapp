import { useEffect, useState } from 'react';
import { DecodeMethodEnum } from 'types';
import { getWindowLocation } from 'utils/window';

export const useDataDecodeMethod = () => {
  const { hash, pathname } = getWindowLocation();
  const hashDecodeMethod = hash.replace('#', '');
  const initialDecodeMethod =
    hashDecodeMethod &&
    Object.values<string>(DecodeMethodEnum).includes(hashDecodeMethod)
      ? hashDecodeMethod
      : DecodeMethodEnum.raw;
  const [decodeMethod, setDecodeMethod] = useState<string>(hashDecodeMethod);

  useEffect(() => {
    if (decodeMethod && decodeMethod !== DecodeMethodEnum.raw) {
      window?.history.replaceState(
        {},
        document?.title,
        `${pathname}#${decodeMethod}`
      );
    }
  }, [decodeMethod, pathname]);

  return { initialDecodeMethod, decodeMethod, setDecodeMethod };
};
