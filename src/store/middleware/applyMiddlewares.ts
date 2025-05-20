import { StoreType } from '../store.types';
import { logoutMiddleware } from './logoutMiddleware';

export const applyMiddlewares = (state: StoreType, _prevState: StoreType) => {
  logoutMiddleware(state);
};
