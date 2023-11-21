import React, { FunctionComponent, useEffect } from 'react';

// const StylesImportRegistry = {
//   'assets/sass/main.scss': import('assets/sass/main.scss'),
//   'UI/PageState/pageState.styles.scss': import(
//     'UI/PageState/pageState.styles.scss'
//   ).then((styles) => styles.default),
//   'UI/LoginButton/loginButtonStyles.scss': import(
//     'UI/LoginButton/loginButtonStyles.scss'
//   )
// };

type StylesType = typeof import('*.scss');

export type WithStylesImportType = {
  globalStyles?: Record<any, any>;
  styles?: Record<any, any>;
};

export function withStyles<TProps>(
  Component: FunctionComponent<TProps & WithStylesImportType>,
  imports: {
    global?: Promise<StylesType>;
    local?: Promise<StylesType>;
  }
) {
  return (props: TProps) => {
    const [globalStyles, setGlobalStyles] = React.useState<Record<any, any>>();
    const [styles, setStyles] = React.useState<Record<any, any>>();

    const importStyles = async () => {
      (imports.global ?? import('assets/sass/main.scss')).then(
        (styles: StylesType) => setGlobalStyles(styles.default)
      );

      if (imports.local) {
        imports.local.then((styles: StylesType) => setStyles(styles.default));
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
