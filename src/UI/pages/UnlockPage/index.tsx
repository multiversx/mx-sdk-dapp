import { DappUI } from 'index';
import React from 'react';
import { getGeneratedClasses, getIsLoggedIn } from 'utils';
import { Props } from './types';

export const UnlockPage = ({
  loginRoute,
  title = 'Login',
  className = 'unlock-page',
  shouldRenderDefaultCss = true,
  LedgerLoginButtonText = 'Ledger',
  description = 'Pick a login method',
  WalletConnectLoginButtonText = 'Maiar',
  ExtensionloginButtonText = 'Extension',
  WebWalletLoginButtonText = 'Web wallet',
}: Props) => {
  const {
    ExtensionLoginButton,
    WebWalletLoginButton,
    LedgerLoginButton,
    WalletConnectLoginButton
  } = DappUI;

  const generatedClasses = getGeneratedClasses(
    className,
    shouldRenderDefaultCss,
    {
      wrapper: 'home d-flex flex-fill align-items-center',
      title: 'mb-4',
      description: 'mb-4',
      cardContainer: 'm-auto',
      card: 'card my-4 text-center',
      cardBody: 'card-body py-4 px-2 px-sm-2 mx-lg-4'
    }
  );

  React.useEffect(() => {
    const isLoggedIn = getIsLoggedIn();
    if (isLoggedIn) {
      window.location.href = loginRoute;
    }
  }, []);

  return (
    <div className={generatedClasses.wrapper}>
      <div className={generatedClasses.cardContainer}>
        <div className={generatedClasses.card}>
          <div className={generatedClasses.cardBody}>
            <h4 className={generatedClasses.title}>{title}</h4>
            <p className={generatedClasses.description}>{description}</p>
            <ExtensionLoginButton
              callbackRoute={loginRoute}
              loginButtonText={ExtensionloginButtonText}
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
