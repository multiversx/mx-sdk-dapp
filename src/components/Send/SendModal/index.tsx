import * as React from 'react';
import { Transaction, TransactionHash } from '@elrondnetwork/erdjs';
import { faHourglass, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Modal } from 'react-bootstrap';
import { ProviderType } from 'utils/getProviderType';
import PageState from 'UI/PageState';
import TransactionStatus from './TransactionStatus';

export interface SendModalType {
  show: boolean;
  handleClose: () => void;
  error: string;
  transaction?: Transaction;
  providerType: ProviderType;
  txHash: TransactionHash;
  callbackRoute: string;
  showStatus: boolean;
}

const SendModal = ({
  show,
  handleClose,
  error,
  transaction,
  providerType,
  txHash,
  callbackRoute,
  showStatus
}: SendModalType) => {
  let title = 'Confirm on Maiar Extension';
  title = providerType === 'ledger' ? 'Confirm on Ledger' : title;
  title = providerType === 'walletconnect' ? 'Confirm on Maiar' : title;

  return (
    <Modal
      show={show}
      backdrop='static'
      onHide={handleClose}
      className='modal-container'
      animation={false}
      centered
    >
      <div className='card container'>
        <div className='card-body'>
          {showStatus === true ? (
            <TransactionStatus
              txHash={txHash}
              callbackRoute={callbackRoute}
              handleClose={handleClose}
            />
          ) : (
            <PageState
              icon={error ? faTimes : faHourglass}
              iconClass='text-white'
              iconBgClass={error ? 'bg-danger' : 'bg-warning'}
              iconSize='3x'
              title={title}
              description={
                <React.Fragment>
                  {transaction && (
                    <React.Fragment>
                      <div
                        className='form-group text-left'
                        data-testid='transactionTitle'
                      >
                        <span className='form-label'>To: </span>
                        {transaction.getReceiver().toString()}
                      </div>
                      <div className='form-group text-left'>
                        <span className='form-label'>Data: </span>
                        {transaction.getData() && (
                          <React.Fragment>
                            {transaction.getData().toString()}
                          </React.Fragment>
                        )}
                      </div>
                    </React.Fragment>
                  )}
                  <React.Fragment>
                    {error && (
                      <p className='text-danger d-flex justify-content-center align-items-center'>
                        {error}
                      </p>
                    )}
                    <div className='text-center'>
                      <button
                        id='closeButton'
                        className='btn btn-primary mx-2 '
                        onClick={handleClose}
                        disabled={providerType === 'ledger' && error === ''}
                      >
                        Close
                      </button>
                    </div>
                  </React.Fragment>
                </React.Fragment>
              }
            />
          )}
        </div>
      </div>
    </Modal>
  );
};

export default SendModal;
