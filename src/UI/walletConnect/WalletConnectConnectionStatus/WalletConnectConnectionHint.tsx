import React from 'react';
import classNames from 'classnames';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';

const WalletConnectConnectionHintComponent = ({
  globalStyles
}: WithStylesImportType) => (
  <div
    className={classNames(
      globalStyles?.dFlex,
      globalStyles?.flexColumn,
      globalStyles?.alignItemsCenter,

      globalStyles?.mt2
    )}
  >
    <small className={globalStyles?.textSecondary}>
      Make sure that the phone is unlocked and the app is opened.
    </small>
    <small>
      Hint:{' '}
      <span className={globalStyles?.textSecondary}>
        Battery saving mode might have an effect on the connection quality.
      </span>
    </small>
  </div>
);

export const WalletConnectConnectionHint = withStyles(
  WalletConnectConnectionHintComponent,
  {}
);
