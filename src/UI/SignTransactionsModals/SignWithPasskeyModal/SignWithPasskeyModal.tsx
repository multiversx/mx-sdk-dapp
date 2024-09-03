import React from 'react';
import { SignModalPropsType } from 'types';

import {
  SignWaitingScreenModal,
  SignWaitingScreenModalPropsType
} from '../components';

export const SignWithPasskeyModal = (props: SignModalPropsType) => {
  const description = props.error
    ? props.error
    : props.transactions?.length > 1
    ? 'Please signin with your passkey in order to sign the transactions'
    : 'Please signin with your passkey in order to sign the transaction';

  const waitingScreenProps: SignWaitingScreenModalPropsType = {
    ...props,
    description,
    title: 'Confirm by signing in with passkey'
  };

  return <SignWaitingScreenModal {...waitingScreenProps} />;
};
