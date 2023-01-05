import React from 'react';
import classNames from 'classnames';
import globalStyles from 'assets/sass/main.scss';

export const WalletConnectConnectionHint = () => (
  <div
    className={classNames(
      globalStyles.dFlex,
      globalStyles.flexColumn,
      globalStyles.alignItemsCenter,

      globalStyles.mt2
    )}
  >
    <small className={globalStyles.textSecondary}>
      Make sure that the phone is unlocked and the app is opened.
    </small>
    <small>
      Hint:{' '}
      <span className={globalStyles.textSecondary}>
        Battery saving mode might have an effect on the connection quality.
      </span>
    </small>
  </div>
);
