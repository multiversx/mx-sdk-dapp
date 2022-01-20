import { useEffect } from 'react';

export const useInterval = (callback, time) => {
  useEffect(() => {
    callback();

    const interval = setInterval(() => {
      callback();
    }, time);

    return () => clearInterval(interval);
  }, []);
};
