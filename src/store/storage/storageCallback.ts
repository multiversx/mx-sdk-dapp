import { StateStorage } from 'zustand/middleware';

export type StorageCallback = () => StateStorage;

export const defaultStorageCallback: StorageCallback = () => localStorage;
