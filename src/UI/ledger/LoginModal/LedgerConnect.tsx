import React from 'react';
import globalStyles from 'assets/sass/main.scss';
import { ReactComponent as LedgerLogo } from '../assets/ledger-nano.svg';
import styles from '../styles/ledger.scss';

const LedgerConnect = ({
  onClick,
  error,
  connectPageContent
}: {
  onClick: () => void;
  error: string;
  connectPageContent?: React.ReactNode;
}) => {
  return (
    <div className={`${globalStyles.mAuto} ${styles.loginContainer}`}>
      <div
        className={`${globalStyles.card} ${globalStyles.my4} ${globalStyles.textCenter} ${globalStyles.border0}`}
      >
        <div
          className={`${globalStyles.cardBody} ${globalStyles.p4} ${globalStyles.mxLg4}`}
        >
          {connectPageContent ? (
            <React.Fragment>{connectPageContent}</React.Fragment>
          ) : (
            <React.Fragment>
              <LedgerLogo className={globalStyles.mb4} />
              <h4 className={globalStyles.mb4}>Connect Ledger</h4>
              <p className={`${globalStyles.lead} ${globalStyles.mb4}`}>
                Unlock your device &amp; open the Elrond App.
              </p>
            </React.Fragment>
          )}

          <div>
            {error && (
              <p
                className={`${globalStyles.textDanger} ${globalStyles.flexRow} ${globalStyles.justifyContentCenter} ${globalStyles.alignItemsCenter}`}
              >
                {error}
              </p>
            )}
            <button
              className={`${globalStyles.btn} ${globalStyles.btnPrimary}`}
              onClick={onClick}
              data-testid='connectBtn'
            >
              Connect Ledger
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LedgerConnect;
