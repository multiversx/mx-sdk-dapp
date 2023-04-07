import { ReactNode } from 'react';
import { Transaction } from '@multiversx/sdk-core/out';
import { GuardianProvider } from 'services/transactions/GuardianProvider';
import type {
  ActiveLedgerTransactionType,
  MultiSignTransactionType
} from 'types';
import type { WithClassnameType } from '../../types';

export interface SignStepInnerClassesType {
  buttonsWrapperClassName?: string;
  inputGroupClassName?: string;
  inputLabelClassName?: string;
  inputValueClassName?: string;
  errorClassName?: string;
  scamAlertClassName?: string;
  buttonClassName?: string;
  progressClassName?: string;
}

export type DeviceSignedTransactions = Record<number, Transaction>;

export interface GuardianScreenType extends WithClassnameType {
  onSignTransaction: () => void;
  onPrev: () => void;
  guardianProvider?: GuardianProvider;
  title?: ReactNode;
  signStepInnerClasses?: SignStepInnerClassesType;
  signedTransactions?: DeviceSignedTransactions;
  setSignedTransactions?: React.Dispatch<
    React.SetStateAction<DeviceSignedTransactions | undefined>
  >;
}

export interface SignStepPropsType
  extends WithClassnameType,
    GuardianScreenType {
  handleClose: () => void;
  waitingForDevice: boolean;
  error: string | null;
  callbackRoute?: string;
  currentStep: number;
  currentTransaction: ActiveLedgerTransactionType | null;
  allTransactions: MultiSignTransactionType[];
  isLastTransaction: boolean;
}
