import React from 'react';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { DataTestIdsEnum } from 'constants/index';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { useGetAccountFromApi } from 'hooks';
import { LoadingDots } from 'UI/LoadingDots';
import { isContract } from 'utils/smartContracts';
import { ReceiverSubValue } from './components/ReceiverSubValue';
import { ReceiverValue } from './components/ReceiverValue';

export interface ConfirmReceiverPropsType {
  receiver: string;
  scamReport: string | null;
  receiverUsername?: string;
}

const ConfirmReceiverComponent = ({
  receiver,
  scamReport,
  receiverUsername,
  styles
}: ConfirmReceiverPropsType & WithStylesImportType) => {
  const isSmartContract = isContract(receiver);

  const skipFetchingAccount = Boolean(isSmartContract || receiverUsername);

  const {
    account: usernameAccount,
    loading: usernameAccountLoading,
    error: usernameAccountError
  } = useGetAccountFromApi(skipFetchingAccount ? null : receiver);

  const foundReceiverUsername = receiverUsername ?? usernameAccount?.username;
  const receiverValue = foundReceiverUsername ?? receiver;
  const hasUsername = Boolean(
    receiver && Boolean(foundReceiverUsername) && !usernameAccountError
  );

  return (
    <div className={styles?.receiver}>
      <span className={styles?.label}>Receiver</span>

      {usernameAccountLoading ? (
        <LoadingDots className={styles?.loadingDots} />
      ) : (
        <span
          data-testid={DataTestIdsEnum.confirmReceiver}
          className={styles?.valueWrapper}
        >
          <ReceiverValue
            hasUsername={hasUsername}
            receiverAddress={receiver}
            receiverValue={receiverValue}
          />
        </span>
      )}

      {usernameAccountLoading ? (
        <LoadingDots
          className={classNames(styles?.loadingDots, styles?.absolute)}
        />
      ) : (
        <ReceiverSubValue hasUsername={hasUsername} receiver={receiver} />
      )}

      {scamReport && (
        <div className={styles?.scam}>
          <span>
            <FontAwesomeIcon
              icon={faExclamationTriangle}
              className={styles?.icon}
            />

            <small data-testid={DataTestIdsEnum.confirmScamReport}>
              {scamReport}
            </small>
          </span>
        </div>
      )}
    </div>
  );
};

export const ConfirmReceiver = withStyles(ConfirmReceiverComponent, {
  local: () =>
    import(
      'UI/SignTransactionsModals/SignWithDeviceModal/components/components/ConfirmReceiver/confirmReceiverStyles.scss'
    )
});
