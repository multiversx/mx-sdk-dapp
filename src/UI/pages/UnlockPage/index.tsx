import React from 'react';
import globalStyles from 'assets/sass/main.scss';
import { useGetLoginInfo } from 'hooks';
import ExtensionLoginButton from 'UI/extension/LoginButton';
import LedgerLoginButton from 'UI/ledger/LoginButton';
import WalletConnectLoginButton from 'UI/walletConnect/WalletConnectLoginButton';
import WebWalletLoginButton from 'UI/webWallet/LoginButton';
import { getGeneratedClasses } from 'utils';
import styles from './styles/unlock-page.scss';
import { Props } from './types';

const UnlockPage = ({
  loginRoute,
  title = 'Login',
  className = 'unlock-page',
  shouldRenderDefaultCss = true,
  LedgerLoginButtonText = 'Ledger',
  description = 'Pick a login method',
  WalletConnectLoginButtonText = 'Maiar',
  ExtensionLoginButtonText = 'Extension',
  WebWalletLoginButtonText = 'Web wallet'
}: Props) => {
  const generatedClasses = getGeneratedClasses(
    className,
    shouldRenderDefaultCss,
    {
      wrapper: styles.wrapper,
      title: globalStyles.mb4,
      description: globalStyles.mb4,
      cardContainer: globalStyles.mAuto,
      card: `${globalStyles.card} ${globalStyles.my4} ${globalStyles.textCenter}`,
      cardBody: `${globalStyles.cardBody} ${globalStyles.py4} ${globalStyles.px2} ${globalStyles.pxSm2} ${globalStyles.mxLg4}`
    }
  );
  const { isLoggedIn } = useGetLoginInfo();

  React.useEffect(() => {
    if (isLoggedIn) {
      window.location.href = loginRoute;
    }
  }, [isLoggedIn]);

  return (
    <div className={generatedClasses.wrapper}>
      <div className={generatedClasses.cardContainer}>
        <div className={generatedClasses.card}>
          <div className={generatedClasses.cardBody}>
            <h4 className={generatedClasses.title}>{title}</h4>
            <p className={generatedClasses.description}>{description}</p>
            <ExtensionLoginButton
              callbackRoute={loginRoute}
              loginButtonText={ExtensionLoginButtonText}
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

export default UnlockPage;
