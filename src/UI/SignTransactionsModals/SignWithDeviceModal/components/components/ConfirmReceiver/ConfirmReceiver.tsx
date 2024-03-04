import React from 'react';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ACCOUNTS_ENDPOINT } from 'apiCalls';
import MultiversXIconSimple from 'assets/icons/mvx-icon-simple.svg';
import { DataTestIdsEnum } from 'constants/index';
import { withStyles } from 'hocs/withStyles';
import { useGetAccountFromApi } from 'hooks';
import { trimUsernameDomain } from 'hooks/account/helpers';
import { CopyButton } from 'UI/CopyButton';
import { ExplorerLink } from 'UI/ExplorerLink';
import { LoadingDots } from 'UI/LoadingDots';
import { Trim } from 'UI/Trim';
import { isContract } from 'utils';

import { WithStylesImportType } from '../../../../../../hocs/useStyles';

export interface ConfirmReceiverPropsType extends WithStylesImportType {
  receiver: string;
  scamReport: string | null;
  receiverUsername?: string;
}

const ConfirmReceiverComponent = ({
  receiver,
  scamReport,
  receiverUsername,
  styles
}: ConfirmReceiverPropsType) => {
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
      <div className={styles?.receiverLabelWrapper}>
        <div className={styles?.receiverLabel}>To</div>

        {scamReport && (
          <div className={styles?.receiverLabelScam}>
            <span
              className={styles?.receiverLabelScamText}
              data-testid={DataTestIdsEnum.confirmScamReport}
            >
              {scamReport}
            </span>

            <FontAwesomeIcon
              icon={faExclamationTriangle}
              className={styles?.receiverLabelScamIcon}
            />
          </div>
        )}
      </div>

      {usernameAccountLoading ? (
        <div className={styles?.receiverWrapper}>
          <LoadingDots className={styles?.receiverLoading} />
        </div>
      ) : (
        <div
          className={styles?.receiverWrapper}
          data-testid={DataTestIdsEnum.confirmReceiver}
        >
          <Trim text={receiver} className={styles?.receiverTrim} />

          {hasUsername && !isSmartContract && (
            <span className={styles?.receiverData}>
              (<MultiversXIconSimple className={styles?.receiverDataIcon} />
              <span className={styles?.receiverDataUsername}>
                {trimUsernameDomain(receiverValue)}
              </span>
              )
            </span>
          )}

          {isSmartContract && (
            <span className={styles?.receiverData}>
              (
              <span className={styles?.receiverDataUsername}>
                Smart Contract
              </span>
              )
            </span>
          )}

          <CopyButton text={receiver} className={styles?.receiverCopy} />
          <ExplorerLink
            page={`/${ACCOUNTS_ENDPOINT}/${receiver}`}
            className={styles?.receiverExternal}
          />
        </div>
      )}
    </div>
  );
};

export const ConfirmReceiver = withStyles(ConfirmReceiverComponent, {
  ssrStyles: () =>
    import(
      'UI/SignTransactionsModals/SignWithDeviceModal/components/components/ConfirmReceiver/confirmReceiverStyles.scss'
    ),
  clientStyles: () =>
    require('UI/SignTransactionsModals/SignWithDeviceModal/components/components/ConfirmReceiver/confirmReceiverStyles.scss')
      .default
});
