import { ReactNode, MutableRefObject } from 'react';

import { OnProviderLoginType } from '../../../types';
import { WithClassnameType } from '../../types';
import { InnerWalletConnectComponentsClassesType } from '../types';

export interface WalletConnectLoginModalPropsType
  extends OnProviderLoginType,
    WithClassnameType {
  loginButtonText: string;
  customSpinnerComponent?: ReactNode;
  innerWalletConnectComponentsClasses?: InnerWalletConnectComponentsClassesType;
  isWalletConnectV2?: boolean;
  lead?: string;
  legacyMessage?: string;
  logoutRoute?: string;
  onClose?: () => void;
  showLoginContent?: boolean;
  showLoginModal?: boolean;
  showScamPhishingAlert?: boolean;
  title?: string;
  wrapContentInsideModal?: boolean;
  canLoginRef?: MutableRefObject<boolean>;
  customRequestMethods?: Array<string>;
}
