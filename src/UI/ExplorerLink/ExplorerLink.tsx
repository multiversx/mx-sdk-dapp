import React from 'react';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { isSSR } from 'utils/isSSR';
import {
  ExplorerLinkComponent,
  ExplorerLinkPropsType
} from './ExplorerLinkComponent';

export const ExplorerLink = isSSR()
  ? withStyles(ExplorerLinkComponent, {
      local: () => import('UI/ExplorerLink/explorerLinkStyles.scss')
    })
  : (props: ExplorerLinkPropsType & WithStylesImportType) => {
      const globalStyles = require('assets/sass/main.scss');
      const styles = require('UI/ExplorerLink/explorerLinkStyles.scss');

      return (
        <ExplorerLinkComponent
          {...props}
          globalStyles={globalStyles}
          styles={styles}
        />
      );
    };
