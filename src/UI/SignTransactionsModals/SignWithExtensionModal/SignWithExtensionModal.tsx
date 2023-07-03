import React from 'react';
import ExtensionIcon from 'assets/icons/extension-preview.svg';
import { SignModalPropsType } from 'types';

import {
  SignWaitingScreenModal,
  SignWaitingScreenModalPropsType
} from '../components';

export const SignWithExtensionModal = (props: SignModalPropsType) => {
  const transactionLabel =
    props.transactions?.length === 1 ? 'transaction' : 'transactions';

  const waitingScreenProps: SignWaitingScreenModalPropsType = {
    ...props,
    providerIcon: <ExtensionIcon />,
    description: props.error || (
      <div>
        You can now confirm the {transactionLabel} on your{' '}
        <span>DeFi Wallet</span>.
      </div>
    )
  };

  return <SignWaitingScreenModal {...waitingScreenProps} />;
};
