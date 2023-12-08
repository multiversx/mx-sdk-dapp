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
    localSync?: () => StylesType;
  }
) {
  return (props: TProps) => {
    const { globalStyles, styles } = useStyles({
      globalImportCallback: imports.global,
      localImportCallback: imports.local,
      localImportSyncCallback: imports.localSync
    });

    console.log({
      globalStyles,
      styles
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
