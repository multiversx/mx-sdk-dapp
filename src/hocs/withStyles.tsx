import React, { FunctionComponent, useEffect } from 'react';

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
    const [globalStyles, setGlobalStyles] = React.useState<Record<any, any>>();
    const [styles, setStyles] = React.useState<Record<any, any>>();

    const defaultGlobalImport = async () =>
      await import('assets/sass/main.scss');

    const importStyles = async () => {
      (imports.global ? imports.global() : defaultGlobalImport()).then(
        (styles: StylesType) => setGlobalStyles(styles.default)
      );

      if (imports.local) {
        imports.local().then((styles: StylesType) => setStyles(styles.default));
      }
    };

    useEffect(() => {
      importStyles();
    }, []);

    return (
      <Component
        {...props}
        globalStyles={globalStyles ?? {}}
        styles={styles ?? {}}
      />
    );
  };
}
