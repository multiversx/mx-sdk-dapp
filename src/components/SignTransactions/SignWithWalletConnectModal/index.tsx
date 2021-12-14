import * as React from 'react';
import { Transaction } from '@elrondnetwork/erdjs';
import { faHourglass, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { updateSignStatus } from 'redux/slices/transactionsSlice';
import { providerSelector } from '../../../redux/selectors';
import { transactionStatuses } from '../../../types/enums';
import PageState from '../../../UI/PageState';
import { HandleCloseType } from '../helpers';

export interface SignModalType {
  show: boolean;
  handleClose: (props?: HandleCloseType) => void;
  error: string;
  sessionId: string;
  transactions: Transaction[];
  setError: (value: React.SetStateAction<string>) => void;
  callbackRoute: string;
}

const SignWithWalletConnectModal = ({
  show,
  handleClose,
  error,
  sessionId,
  setError,
  transactions,
  callbackRoute
}: SignModalType) => {
  const dispatch = useDispatch();

  const provider = useSelector(providerSelector);
  const [signedTransactions, setSignedTransactions] =
    React.useState<Record<number, Transaction>>();

  const description =
    transactions && transactions.length > 1
      ? 'Check your phone to sign the transactions'
      : 'Check your phone to sign the transaction';

  const close = (e: React.MouseEvent) => {
    e.preventDefault();
    handleClose();
    window.location.href = callbackRoute;
  };

  React.useEffect(() => {
    if (transactions && transactions.length) {
      provider
        .init()
        .then((initialised: boolean) => {
          if (!initialised) {
            return;
          }
          provider
            .signTransactions(transactions)
            .then((txs: Transaction[]) => {
              setSignedTransactions(txs);
            })
            .catch(() => {
              handleClose();
            });
        })
        .catch((e: any) => {
          setError(e.message);
        });
    }
  }, [transactions]);

  React.useEffect(() => {
    const signingDisabled =
      !signedTransactions ||
      (signedTransactions &&
        Object.keys(signedTransactions).length !== transactions.length);

    if (!signingDisabled && signedTransactions) {
      dispatch(
        updateSignStatus({
          [sessionId]: {
            status: transactionStatuses.signed,
            transactions: Object.values(signedTransactions).map((tx) =>
              tx.toPlainObject()
            )
          }
        })
      );
      setSignedTransactions(undefined);
      handleClose({ updateBatchStatus: false });
      window.location.href = callbackRoute;
    }
  }, [signedTransactions, transactions]);

  return (
    <Modal
      show={show}
      backdrop='static'
      onHide={handleClose}
      className='modal-container'
      animation={false}
      centered
    >
      <PageState
        icon={error ? faTimes : faHourglass}
        iconClass='text-white'
        iconBgClass={error ? 'bg-danger' : 'bg-warning'}
        iconSize='3x'
        title='Confirm on Maiar'
        description={description}
        action={
          <a
            href='/'
            id='closeButton'
            data-testid='closeButton'
            onClick={close}
            className='btn btn-close-link mt-2'
          >
            Close
          </a>
        }
      />
    </Modal>
  );
};

export default SignWithWalletConnectModal;
