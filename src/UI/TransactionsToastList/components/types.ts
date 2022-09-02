import React from 'react';

export type ComponentTypeWithChildren<T> = React.ComponentType<
  React.PropsWithChildren<T>
>;
