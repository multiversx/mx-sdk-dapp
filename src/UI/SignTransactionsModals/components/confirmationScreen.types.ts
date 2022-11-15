import { SignPropsType } from '../types/signTransactionsModals.types';

export interface ExtraConfirmationScreenPropsType {
  Screen?: (signProps: SignPropsType) => JSX.Element;
  verifyReceiverScam?: boolean;
  className?: string;
}
