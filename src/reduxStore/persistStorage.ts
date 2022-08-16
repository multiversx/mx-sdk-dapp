import reduxPersistLocalStorage from 'redux-persist/lib/storage';
import reduxPersistSessionStorage from 'redux-persist/lib/storage/session';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { isMobileEnvironment } from '../utils';

const persistLocalStorage = reduxPersistLocalStorage;
const persistSessionStorage = reduxPersistSessionStorage;

export const getPersistLocalStorage = () => {
  return isMobileEnvironment() ? AsyncStorage : persistLocalStorage;
};

export const getPersistSessionStorage = () => {
  return isMobileEnvironment() ? AsyncStorage : persistSessionStorage;
};
