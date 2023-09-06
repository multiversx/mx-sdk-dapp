import { ReactNode, MutableRefObject } from 'react';

import { WithClassnameType } from '../../types';
import { InnerWalletConnectComponentsClassesType } from '../types';
import { OnProviderLoginType } from './../../../types';

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
  showScamPhishingAlert?: boolean;
  title?: string;
  wrapContentInsideModal?: boolean;
  canLoginRef?: MutableRefObject<boolean>;
}
