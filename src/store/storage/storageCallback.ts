import { StateStorage } from 'zustand/middleware';
import { safeWindow } from 'constants/window.constants';

export type StorageCallback = () => StateStorage;

export const defaultStorageCallback: StorageCallback = () =>
  safeWindow.localStorage;
