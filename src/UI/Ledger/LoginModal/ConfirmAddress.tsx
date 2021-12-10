import React from 'react';
import { useSelector } from 'react-redux';
import { ledgerAccountSelector } from '../../../redux/selectors';
import { getGeneratedClasses } from '../../../utils';

interface ConfirmAddressPropsType {
  token?: string;
  noBorder?: boolean;
  className?: string;
  shouldRenderDefaultCss?: boolean;
  confirmTitle?: string;
  confirmMessage?: string;
  supportLink?: string;
}

const ConfirmAddress = ({
  token,
  noBorder,
  className = 'confirm-ledger-address',
  shouldRenderDefaultCss = true,
  confirmTitle = 'Confirm Ledger Address',
  confirmMessage = 'For security, please confirm that your address:',
  supportLink = 'https://help.elrond.com/en/'
}: ConfirmAddressPropsType) => {
  const ledgerAccount = useSelector(ledgerAccountSelector);

  const classes = getGeneratedClasses(className, shouldRenderDefaultCss, {
    wrapper: 'm-auto',
    contentWrapper: `card my-4 text-center ${noBorder ? 'border-0' : ''}`,
    contentContainer: 'card-body p-4 mx-lg-4',
    confirmTitle: 'mb-4',
    ledgerAddress: 'lead border rounded p-2',
    authToken: 'lead border rounded p-2',
    approveSubtitle: 'm-0'
  });

  return (
    <div className={classes.wrapper}>
      <div className={classes.contentWrapper}>
        <div className={classes.contentContainer}>
          <h4 className={classes.confirmTitle}>{confirmTitle}</h4>
          <p>{confirmMessage} </p>
          <p className={classes.ledgerAddress}>
            {ledgerAccount ? ledgerAccount.address : ''}
          </p>
          {token && (
            <React.Fragment>
              <p>and Auth Token</p>
              <p className={classes.authToken}>{`${token}{}`}</p>
            </React.Fragment>
          )}
          <p className={classes.approveSubtitle}>
            {token
              ? 'are the one shown on your Ledger device screen now.'
              : 'is the one shown on your Ledger device screen now.'}
          </p>

          <p>Select Approve on your device to confirm.</p>
          <p>
            Or, if it does not match, close this page and{' '}
            <a
              href={supportLink}
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
