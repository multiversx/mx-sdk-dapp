import { logoutMiddleware } from 'store/middleware/logoutMiddleware';
import { nonceMiddleware } from 'store/middleware/nonceMiddleware';
import { StoreType } from 'store/store.types';

export const applyMiddlewares = (state: StoreType, prevState: StoreType) => {
  logoutMiddleware(state);
  nonceMiddleware(state, prevState);
};
