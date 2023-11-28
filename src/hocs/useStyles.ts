import React, { useEffect } from 'react';

type StylesType = typeof import('*.scss');

export type WithStylesImportType = {
  globalStyles?: Record<any, any>;
  styles?: Record<any, any>;
};

export function useStyles({
  globalImportCallback,
  localImportCallback
}: {
  globalImportCallback?: () => Promise<StylesType>;
  localImportCallback?: () => Promise<StylesType>;
}) {
  const [globalStyles, setGlobalStyles] = React.useState<Record<any, any>>();
  const [styles, setStyles] = React.useState<Record<any, any>>();

  const defaultGlobalImport = async () => await import('assets/sass/main.scss');

  const importStyles = async () => {
    (globalImportCallback
      ? globalImportCallback()
      : defaultGlobalImport()
    ).then((styles: StylesType) => setGlobalStyles(styles.default));

    localImportCallback?.().then((styles: StylesType) =>
      setStyles(styles.default)
    );
  };

  useEffect(() => {
    importStyles();
  }, []);

  return {
    globalStyles,
    styles
  };
}
