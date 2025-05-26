import { createBoundedUseStore } from './createBoundedStore';
import { getStore } from '../../store/store';

export const getReactStore = () => createBoundedUseStore(getStore());
