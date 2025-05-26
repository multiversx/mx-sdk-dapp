import { getStore } from 'store/store';
import { createBoundedUseStore } from './createBoundedStore';

export const getReactStore = () => createBoundedUseStore(getStore());
