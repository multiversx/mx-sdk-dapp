import { StoreType } from '../store.types';
import { logoutMiddleware } from './logoutMiddleware';
import { nonceMiddleware } from './nonceMiddleware';

export const applyMiddlewares = (state: StoreType, prevState: StoreType) => {
  logoutMiddleware(state);
  nonceMiddleware(state, prevState);
};
