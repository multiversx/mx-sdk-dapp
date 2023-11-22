import React, { ReactNode } from 'react';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import { DataTestIdsEnum } from 'constants/index';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { PageState } from 'UI/PageState';

export interface LedgerLoadingPropsType {
  customSpinnerComponent?: ReactNode;
  customContentComponent?: ReactNode;
  ledgerLoadingClassNames?: {
    ledgerModalTitleClassName?: string;
    ledgerModalSubtitleClassName?: string;
    ledgerLoadingWrapper?: string;
    ledgerLoadingSpinner?: string;
  };
}

const LedgerLoadingComponent = ({
  customSpinnerComponent,
  ledgerLoadingClassNames,
  customContentComponent,
  globalStyles,
  styles
}: LedgerLoadingPropsType & WithStylesImportType) => {
  const {
    ledgerModalSubtitleClassName,
    ledgerModalTitleClassName,
    ledgerLoadingWrapper,
    ledgerLoadingSpinner
  } = ledgerLoadingClassNames || {};

  return (
    <div
      className={classNames(styles?.ledgerLoadingWrapper, ledgerLoadingWrapper)}
      data-testid={DataTestIdsEnum.ledgerLoading}
    >
      <div
        className={classNames(
          styles?.ledgerLoadingHeading,
          ledgerModalTitleClassName
        )}
      >
        Waiting for device...
      </div>

      <p
        className={classNames(
          styles?.ledgerLoadingDescription,
          ledgerModalSubtitleClassName
        )}
      >
        It may take a few seconds...
      </p>

      {customContentComponent}

      <div
        className={classNames(
          styles?.ledgerLoadingSpinner,
          ledgerLoadingSpinner
        )}
      >
        {customSpinnerComponent ? (
          customSpinnerComponent
        ) : (
          <PageState
            iconSize='10x'
            icon={faCircleNotch}
            iconClass={classNames('fa-spin', globalStyles?.textPrimary)}
          />
        )}
      </div>
    </div>
  );
};

export const LedgerLoading = withStyles(LedgerLoadingComponent, {
  local: () =>
    import(
      'UI/ledger/LedgerLoginContainer/LedgerLoading/ledgerLoadingStyles.scss'
    )
});
