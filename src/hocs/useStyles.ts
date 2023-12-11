import React, { useEffect } from 'react';
import { isSSR } from 'utils/isSSR';

type StylesType = typeof import('*.scss');

export type WithStylesImportType = {
  globalStyles?: Record<any, any>;
  styles?: Record<any, any>;
};

const defaultServerGlobalImport = async () =>
  await import('assets/sass/main.scss');
const defaultClientGlobalImport = () =>
  require('assets/sass/main.scss').default;

const ssr = isSSR();
export function useStyles({
  ssrGlobalImportCallback,
  ssrImportCallback,
  clientImportCallback
}: {
  ssrGlobalImportCallback?: () => Promise<StylesType>;
  ssrImportCallback?: () => Promise<StylesType>;
  clientImportCallback?: () => StylesType;
}) {
  const [globalStyles, setGlobalStyles] = React.useState<Record<any, any>>(
    ssr ? undefined : defaultClientGlobalImport()
  );
  const [styles, setStyles] = React.useState<Record<any, any> | undefined>(
    ssr ? undefined : clientImportCallback?.()
  );

  const importStyles = async () => {
    (ssrGlobalImportCallback
      ? ssrGlobalImportCallback()
      : defaultServerGlobalImport()
    ).then((styles: StylesType) => setGlobalStyles(styles.default));

    ssrImportCallback?.().then((styles: StylesType) =>
      setStyles(styles.default)
    );
  };

  useEffect(() => {
    if (ssr) {
      importStyles();
    }
  }, []);

  return {
    globalStyles,
    styles
  };
}
