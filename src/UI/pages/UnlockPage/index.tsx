import React, { useEffect, ReactNode } from 'react';
import classNames from 'classnames';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { useGetLoginInfo } from 'hooks';
import { ExtensionLoginButton } from 'UI/extension/ExtensionLoginButton';
import { LedgerLoginButton } from 'UI/ledger/LedgerLoginButton';
import { OperaWalletLoginButton } from 'UI/operaWallet/OperaWalletLoginButton';
import { WalletConnectLoginButton } from 'UI/walletConnect/WalletConnectLoginButton';
import { WebWalletLoginButton } from 'UI/webWallet/WebWalletLoginButton';

// TODO: Rename to "UnlockPagePropsType" when sdk-dapp@3.0.0
export interface Props {
  title?: string;
  className?: string;
  loginRoute: string;
  LedgerLoginButtonText?: string;
  ExtensionLoginButtonText?: string;
  OperaWalletLoginButtonText?: string;
  CrossWindowLoginButtonText?: string;
  WebWalletLoginButtonText?: string;
  WalletConnectLoginButtonText?: string;
  WalletConnectV2LoginButtonText?: string;
  description?: string | ReactNode;
}

const UnlockPageComponent = ({
  loginRoute,
  title = 'Login',
  className = 'dapp-unlock-page',
  LedgerLoginButtonText = 'Ledger',
  description = 'Pick a login method',
  WalletConnectLoginButtonText = 'xPortal App',
  ExtensionLoginButtonText = 'Extension',
  OperaWalletLoginButtonText = 'Opera Crypto Wallet',
  WebWalletLoginButtonText = 'Web wallet',
  globalStyles,
  styles
}: Props & WithStylesImportType) => {
  const generatedClasses = {
    wrapper: classNames(
      styles?.home,
      globalStyles?.dFlex,
      globalStyles?.flexFill,
      globalStyles?.alignItemsCenter,
      className
    ),
    title: globalStyles?.mb4,
    description: globalStyles?.mb4,
    cardContainer: globalStyles?.mAuto,
    card: classNames(
      globalStyles?.card,
      globalStyles?.my4,
      globalStyles?.textCenter
    ),
    cardBody: classNames(
      globalStyles?.cardBody,
      globalStyles?.py4,
      globalStyles?.px2,
      globalStyles?.pxSm2,
      globalStyles?.mxLg4
    )
  };
  const { isLoggedIn } = useGetLoginInfo();

  useEffect(() => {
    if (isLoggedIn && window) {
      window.location.href = loginRoute;
    }
  }, [isLoggedIn]);

  return (
    <div className={generatedClasses.wrapper}>
      <div className={generatedClasses.cardContainer}>
        <div className={generatedClasses.card}>
          <div className={generatedClasses.cardBody}>
            <h4 className={classNames(globalStyles?.h4, globalStyles?.title)}>
              {title}
            </h4>

            <p className={generatedClasses.description}>{description}</p>

            <ExtensionLoginButton
              callbackRoute={loginRoute}
              loginButtonText={ExtensionLoginButtonText}
            />

            <OperaWalletLoginButton
              callbackRoute={loginRoute}
              loginButtonText={OperaWalletLoginButtonText}
            />

            <WebWalletLoginButton
              callbackRoute={loginRoute}
              loginButtonText={WebWalletLoginButtonText}
            />

            <LedgerLoginButton
              loginButtonText={LedgerLoginButtonText}
              callbackRoute={loginRoute}
            />

            <WalletConnectLoginButton
              callbackRoute={loginRoute}
              loginButtonText={WalletConnectLoginButtonText}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const UnlockPage = withStyles(UnlockPageComponent, {
  ssrStyles: () => import('UI/pages/UnlockPage/unlockPageStyles.scss'),
  clientStyles: () =>
    require('UI/pages/UnlockPage/unlockPageStyles.scss').default
});
