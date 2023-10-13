import {
  ActiveLedgerTransactionType,
  DeviceSignedTransactions,
  GuardianScreenType,
  MultiSignTransactionType
} from 'types';
import { WithClassnameType } from '../../types';
import { SignPropsType } from '../types/signTransactionsModals.types';

export { DeviceSignedTransactions };

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

export interface SignStepPropsType
  extends WithClassnameType,
    GuardianScreenType {
  GuardianScreen?: SignPropsType['GuardianScreen'];
  allTransactions: MultiSignTransactionType[];
  callbackRoute?: string;
  currentStep: number;
  currentTransaction: ActiveLedgerTransactionType | null;
  error: string | null;
  handleClose: () => void;
  isLastTransaction: boolean;
  isSigning: boolean;
  waitingForDevice: boolean;
}
