import React, { FunctionComponent } from 'react';
import { useStyles } from './useStyles';

type StylesType = typeof import('*.scss');

export type WithStylesImportType = {
  globalStyles?: Record<any, any>;
  styles?: Record<any, any>;
};

export function withStyles<TProps>(
  Component: FunctionComponent<TProps & WithStylesImportType>,
  imports: {
    global?: () => Promise<StylesType>;
    local?: () => Promise<StylesType>;
  }
) {
  return (props: TProps) => {
    const { globalStyles, styles } = useStyles({
      globalImportCallback: imports.global,
      localImportCallback: imports.local
    });

    return (
      <Component
        {...props}
        globalStyles={globalStyles ?? {}}
        styles={styles ?? {}}
      />
    );
  };
}
