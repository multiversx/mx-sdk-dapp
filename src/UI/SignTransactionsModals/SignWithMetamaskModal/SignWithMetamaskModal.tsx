import React from 'react';
import { SignModalPropsType } from 'types';
import { SignWithDeviceModal } from '../SignWithDeviceModal';

export const SignWithMetamaskModal = (props: SignModalPropsType) => {
  return (
    <SignWithDeviceModal
      {...props}
      title={props.title || 'Confirm on Metamask'}
    />
  );
};
