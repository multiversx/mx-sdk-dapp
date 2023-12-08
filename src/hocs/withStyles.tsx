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
    ssrGlobalStyles?: () => Promise<StylesType>;
    ssrStyles?: () => Promise<StylesType>;
    clientStyles?: () => StylesType;
  }
) {
  return (props: TProps) => {
    const { globalStyles, styles } = useStyles({
      ssrGlobalImportCallback: imports.ssrGlobalStyles,
      ssrImportCallback: imports.ssrStyles,
      clientImportCallback: imports.clientStyles
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
