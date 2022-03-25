import Denominate, { DenominateEgld } from './Denominate';
import ExplorerLink from './ExplorerLink';
import ExtensionLoginButton from './extension/LoginButton';
import LedgerLoginButton from './ledger/LoginButton';
import LedgerLoginContainer from './ledger/LoginModal';

import NotificationModal from './NotificationModal';
import PageState from './PageState';
import SignTransactionsModals from './SignTransactionsModals';
import SignWithExtensionModal from './SignTransactionsModals/SignWithExtensionModal';
import SignWithLedgerModal from './SignTransactionsModals/SignWithLedgerModal';
import TransactionsToastList from './TransactionsToastList';
import TransactionToast from './TransactionToast';
import Trim from './Trim';
import WalletConnectLoginButton from './walletConnect/WalletConnectLoginButton';
import WalletConnectLoginContainer from './walletConnect/WalletConnectLoginContainer';
import WebWalletLoginButton from './webWallet/LoginButton';

export {
  ExplorerLink,
  Denominate,
  DenominateEgld,
  PageState,
  ExtensionLoginButton,
  LedgerLoginButton,
  LedgerLoginContainer,
  NotificationModal,
  SignTransactionsModals,
  SignWithLedgerModal,
  SignWithExtensionModal,
  TransactionsToastList,
  TransactionToast,
  WalletConnectLoginButton,
  WalletConnectLoginContainer,
  WebWalletLoginButton,
  Trim
};
export * as DappCorePages from './pages';
