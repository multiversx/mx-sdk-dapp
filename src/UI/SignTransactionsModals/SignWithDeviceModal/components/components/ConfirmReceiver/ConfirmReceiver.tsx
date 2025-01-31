import React, { ReactNode } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BigNumber from 'bignumber.js';
import classNames from 'classnames';

import { useGetAccountFromApi, ACCOUNTS_ENDPOINT } from 'apiCalls';
import MultiversXIconSimple from 'assets/icons/mvx-icon-simple.svg';
import { DataTestIdsEnum } from 'constants/index';
import { withStyles } from 'hocs/withStyles';
import { trimUsernameDomain } from 'hooks/account/helpers';
import { CopyButton } from 'UI/CopyButton';
import { ExplorerLink } from 'UI/ExplorerLink';
import { LoadingDots } from 'UI/LoadingDots';
import { Trim } from 'UI/Trim';
import { isContract } from 'utils';

import { WithStylesImportType } from '../../../../../../hocs/useStyles';

export interface ConfirmReceiverPropsType extends WithStylesImportType {
  amount: string;
  label?: ReactNode;
  customCopyIcon?: IconProp;
  customExplorerIcon?: IconProp;
  receiver: string;
  receiverUsername?: string;
  scamReport: string | null;
  shouldTrimReceiver?: boolean;
}

const ConfirmReceiverComponent = ({
  amount,
  label,
  receiver,
  customExplorerIcon,
  receiverUsername,
  customCopyIcon,
  scamReport,
  shouldTrimReceiver = true,
  styles
}: ConfirmReceiverPropsType) => {
  const isSmartContract = isContract(receiver);
  const skipFetchingAccount = Boolean(isSmartContract || receiverUsername);
  const isAmountZero = new BigNumber(amount).isZero();

  const {
    data: usernameAccount,
    isLoading: usernameAccountLoading,
    error: usernameAccountError
  } = useGetAccountFromApi(skipFetchingAccount ? null : receiver);

  const foundReceiverUsername = receiverUsername ?? usernameAccount?.username;
  const receiverValue = foundReceiverUsername ?? receiver;
  const hasUsername = Boolean(
    receiver && Boolean(foundReceiverUsername) && !usernameAccountError
  );

  const defaultReceiverLabel =
    isAmountZero && isSmartContract ? 'To interact with' : 'To';

  return (
    <div className={styles?.receiver}>
      <div className={styles?.receiverLabelWrapper}>
        <div className={styles?.receiverLabel}>
          {label ?? defaultReceiverLabel}
        </div>

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
          data-testid={DataTestIdsEnum.confirmReceiver}
          className={classNames(styles?.receiverWrapper, {
            [styles?.unwrappable]: shouldTrimReceiver
          })}
        >
          {shouldTrimReceiver ? (
            <Trim text={receiver} className={styles?.receiverTrim} />
          ) : (
            <div className={styles?.receiverText}>{receiver}</div>
          )}

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

          <CopyButton
            text={receiver}
            className={styles?.receiverCopy}
            copyIcon={customCopyIcon}
          />

          <ExplorerLink
            page={`/${ACCOUNTS_ENDPOINT}/${receiver}`}
            customExplorerIcon={customExplorerIcon}
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
