import React from 'react';
import { faWarning } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { WithStylesImportType } from 'hocs/useStyles';
import { withStyles } from 'hocs/withStyles';

export const GuardianWarningToastComponent = ({
  styles
}: WithStylesImportType) => (
  <div className={styles?.guardianWarningToast}>
    <div className={styles?.guardianWarningToastHeading}>
      <FontAwesomeIcon
        icon={faWarning}
        className={styles?.guardianWarningToastHeadingIcon}
      />

      <div className={styles?.guardianWarningToastHeadingText}>
        Account at risk!
      </div>
    </div>

    <div className={styles?.guardianWarningToastDescription}>
      Your account has an unconfirmed guardian change, which could be caused by
      a possible breach! Be cautious before making any transaction.
    </div>
  </div>
);

export const GuardianWarningToast = withStyles(GuardianWarningToastComponent, {
  ssrStyles: () =>
    import('UI/GuardianWarningToast/guardianWarningToastStyles.scss'),
  clientStyles: () =>
    require('UI/GuardianWarningToast/guardianWarningToastStyles.scss').default
});
