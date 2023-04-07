import GenericGuardianProvider from '@multiversx/sdk-guardians-provider/out/genericGuardianProvider';
import { SignPropsType } from '../types/signTransactionsModals.types';

export interface ExtraConfirmationScreenPropsType {
  Screen?: (signProps: SignPropsType) => JSX.Element;
  verifyReceiverScam?: boolean;
  className?: string;
  guardianProvider?: GenericGuardianProvider;
}
