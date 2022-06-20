import React from 'react';
import LedgerLogo from 'assets/icons/ledger-nano.svg';

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
    <div className='m-auto login-container'>
      <div className='card my-4 text-center border-0'>
        <div className='card-body p-4 mx-lg-4'>
          {connectPageContent ? (
            <>{connectPageContent}</>
          ) : (
            <>
              <LedgerLogo className='mb-4' />
              <h4 className='mb-4'>Connect Ledger</h4>
              <p className='lead mb-4'>
                Unlock your device &amp; open the Elrond App.
              </p>
            </>
          )}

          <div>
            {error && (
              <p className='text-danger d-flex justify-content-center align-items-center'>
                {error}
              </p>
            )}
            <button
              className='btn btn-primary px-4'
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
