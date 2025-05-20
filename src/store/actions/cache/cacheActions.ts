import { getStore } from 'store/store';

export const saveToCache = <T>({ key, value }: { key: string; value: T }) => {
  getStore().setState(
    ({ cache: state }) => {
      state[key] = value;
    },
    false,
    'saveToCache'
  );
};

export const removeFromCache = (key: string) => {
  getStore().setState(
    ({ cache: state }) => {
      delete state[key];
    },
    false,
    'removeFromCache'
  );
};

export const clearCache = () => {
  getStore().setState(
    ({ cache: state }) => {
      Object.keys(state).forEach((key) => {
        delete state[key];
      });
    },
    false,
    'clearCache'
  );
};
