import React, { useEffect } from 'react';
import { useSelector } from '../reduxStore/DappProviderContext';
import { dappConfigSelector } from '../reduxStore/selectors';

type StylesType = typeof import('*.scss');

export type WithStylesImportType = {
  globalStyles?: Record<any, any>;
  styles?: Record<any, any>;
};

const defaultGlobalImport = async () => await import('assets/sass/main.scss');

export function useStyles({
  globalImportCallback,
  localImportCallback,
  localImportSyncCallback
}: {
  globalImportCallback?: () => Promise<StylesType>;
  localImportCallback?: () => Promise<StylesType>;
  localImportSyncCallback?: () => Record<any, any>;
}) {
  const dappConfig = useSelector(dappConfigSelector);

  const [globalStyles, setGlobalStyles] = React.useState<Record<any, any>>(
    dappConfig?.isSSR ? undefined : require('assets/sass/main.scss').default
  );
  const [styles, setStyles] = React.useState<Record<any, any> | undefined>(
    dappConfig?.isSSR ? undefined : localImportSyncCallback?.()
  );

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
    if (dappConfig?.isSSR) {
      importStyles();
    }
  }, []);

  return {
    globalStyles,
    styles
  };
}
