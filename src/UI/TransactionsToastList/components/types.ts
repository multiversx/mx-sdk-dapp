import { PropsWithChildren, ComponentType } from 'react';

export type ComponentTypeWithChildren<T> = ComponentType<PropsWithChildren<T>>;
