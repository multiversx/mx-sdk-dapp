import { createBoundedUseStore } from './createBoundedStore';
import { getStore } from './store';

export const getReactStore = () => createBoundedUseStore(getStore());
