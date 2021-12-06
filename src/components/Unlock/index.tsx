import * as React from "react";
import { Link, Redirect } from "react-router-dom";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import PageState from "components/PageState";
import WalletLogin from "./Login/Wallet";
import { useContext } from "context";
import ExtensionLogin from "./Login/Extension";

const Unlock = ({
  callbackRoute,
  errorComponent,
  title = "Unlock",
  lead = "Please select your login method:",
  webWalletButtonLabel = "Web Wallet",
  walletConnectButtonLabel = "Maiar App",
  ledgerButtonLabel = "Ledger",
  extensionButtonLabel = "Maiar Extension",
  ledgerRoute,
  walletConnectRoute,
}: {
  callbackRoute: string;
  title?: React.ReactNode;
  lead?: React.ReactNode;
  errorComponent?: React.ReactNode;
  webWalletButtonLabel?: string;
  walletConnectButtonLabel?: string;
  ledgerButtonLabel?: string;
  extensionButtonLabel?: string;
  ledgerRoute: string;
  walletConnectRoute: string;
}) => {

  const { error, loggedIn } = useContext();

  const ref = React.useRef(null);

  const ErrorComponent = () =>
    errorComponent ? (
      <React.Fragment>{errorComponent}</React.Fragment>
    ) : (
      <PageState
        icon={faBan}
        iconClass="text-primary"
        title="Something went wrong"
        description="If the problem persists please contact support."
      />
    );

  return (
    <div ref={ref} className="home d-flex flex-fill align-items-center">
      {error ? (
        <ErrorComponent />
      ) : loggedIn ? (
        <Redirect to={callbackRoute} />
      ) : (
        <div className="m-auto" data-testid="unlockPage">
          <div className="card my-4 text-center">
            <div className="card-body py-4 px-2 px-sm-2 mx-lg-4">
              <React.Fragment>
                <h4 className="mb-4">{title}</h4>
                <p className="mb-4">{lead}</p>
              </React.Fragment>
              <div>
                <Link
                  className="btn btn-primary px-sm-4 m-1 mx-sm-3"
                  to={walletConnectRoute}
                  data-testid="walletConnectLink"
                >
                  {walletConnectButtonLabel}
                </Link>
                <ExtensionLogin
                  callbackRoute={callbackRoute}
                  extensionButtonLabel={extensionButtonLabel}
                />
                <Link
                  className="btn btn-primary px-sm-4 m-1 mx-sm-3"
                  data-testid="ledgerLink"
                  to={ledgerRoute}
                >
                  {ledgerButtonLabel}
                </Link>
                <WalletLogin
                  callbackRoute={callbackRoute}
                  webWalletButtonLabel={webWalletButtonLabel}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Unlock;
