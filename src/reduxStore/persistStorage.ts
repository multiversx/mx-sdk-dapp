import reduxPersistLocalStorage from 'redux-persist/lib/storage';
import reduxPersistSessionStorage from 'redux-persist/lib/storage/session';

const persistLocalStorage = reduxPersistLocalStorage;
const persistSessionStorage = reduxPersistSessionStorage;

export const getPersistLocalStorage = () => {
  return persistLocalStorage;
};

export const getPersistSessionStorage = () => {
  return persistSessionStorage;
};
