import React from 'react';
import globalStyles from 'assets/sass/main.scss';
import { useGetAccountInfo } from 'hooks';

const ConfirmAddress = ({
  token,
  noBorder
}: {
  token?: string;
  noBorder?: boolean;
}) => {
  const { ledgerAccount } = useGetAccountInfo();
  return (
    <div className={globalStyles.mAuto}>
      <div
        className={`${globalStyles.card} ${globalStyles.my4} ${
          globalStyles.textCenter
        } ${noBorder ? globalStyles.border0 : ''}`}
      >
        <div
          className={`${globalStyles.cardBody} ${globalStyles.p4} ${globalStyles.mxLg4}`}
        >
          <h4 className={globalStyles.mb4}>Confirm Ledger Address</h4>
          <p>For security, please confirm that your address: </p>
          <p className='lead border rounded p-2'>
            {ledgerAccount ? ledgerAccount.address : ''}
          </p>
          {token && (
            <React.Fragment>
              <p>and Auth Token</p>
              <p className='lead border rounded p-2'>{`${token}{}`}</p>
            </React.Fragment>
          )}
          <p className={globalStyles.m0}>
            {token
              ? 'are the one shown on your Ledger device screen now.'
              : 'is the one shown on your Ledger device screen now.'}
          </p>

          <p>Select Approve on your device to confirm.</p>
          <p>
            Or, if it does not match, close this page and{' '}
            <a
              href='https://help.elrond.com/en/'
              {...{
                target: '_blank'
              }}
            >
              contact support
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmAddress;
