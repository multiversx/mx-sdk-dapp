import type {
  ActiveLedgerTransactionType,
  GuardianScreenType,
  MultiSignTransactionType
} from 'types';
import type { WithClassnameType } from '../../types';
import { SignPropsType } from '../types/signTransactionsModals.types';

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
  handleClose: () => void;
  GuardianScreen?: SignPropsType['GuardianScreen'];
  waitingForDevice: boolean;
  error: string | null;
  callbackRoute?: string;
  currentStep: number;
  currentTransaction: ActiveLedgerTransactionType | null;
  allTransactions: MultiSignTransactionType[];
  isLastTransaction: boolean;
}
