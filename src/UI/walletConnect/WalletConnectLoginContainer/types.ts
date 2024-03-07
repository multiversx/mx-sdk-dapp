import { ReactNode, MutableRefObject } from 'react';

import { OnProviderLoginType } from '../../../types/login.types';
import { WithClassnameType } from '../../types';
import { InnerWalletConnectComponentsClassesType } from '../types';

export interface WalletConnectLoginModalPropsType
  extends OnProviderLoginType,
    WithClassnameType {
  loginButtonText: string;
  customSpinnerComponent?: ReactNode;
  innerWalletConnectComponentsClasses?: InnerWalletConnectComponentsClassesType;
  lead?: string;
  legacyMessage?: string;
  logoutRoute?: string;
  onClose?: () => void;
  showLoginContent?: boolean;
  showLoginModal?: boolean;
  showScamPhishingAlert?: boolean;
  title?: string;
  wrapContentInsideModal?: boolean;
  customRequestMethods?: Array<string>;
  // deprecated/not used - kept for compatibility
  isWalletConnectV2?: boolean;
  canLoginRef?: MutableRefObject<boolean>;
}
