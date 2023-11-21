import React, { FunctionComponent, useEffect } from 'react';

const StylesImportRegistry = {
  'assets/sass/main.scss': import('assets/sass/main.scss'),
  'UI/PageState/pageState.styles.scss': import(
    'UI/PageState/pageState.styles.scss'
  ).then((styles) => styles.default),
  'UI/LoginButton/loginButtonStyles.scss': import(
    'UI/LoginButton/loginButtonStyles.scss'
  )
};

type StylesType = typeof import('*.scss');

export type WithStylesImportType = {
  globalStyles?: Record<any, any>;
  styles?: Record<any, any>;
};

export function withStyles<TProps>(
  Component: FunctionComponent<TProps & WithStylesImportType>,
  imports: {
    global?: string;
    local?: string;
  }
) {
  return (props: TProps) => {
    const [globalStyles, setGlobalStyles] = React.useState<Record<any, any>>();
    const [styles, setStyles] = React.useState<Record<any, any>>();

    const computeClasses = async () => {
      setGlobalStyles(
        await StylesImportRegistry[
          imports.global ?? 'assets/sass/main.scss'
        ].then((styles: StylesType) => styles.default)
      );

      if (imports.local) {
        setStyles(
          await StylesImportRegistry[imports.local].then(
            (styles: StylesType) => styles.default
          )
        );
      }
    };

    useEffect(() => {
      computeClasses();
    }, []);

    return <Component {...props} globalStyles={globalStyles} styles={styles} />;
  };
}
