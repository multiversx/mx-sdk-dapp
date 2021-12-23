import React from 'react';
import { Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { transactionsToSignSelector } from 'redux/selectors';
import { HandleCloseType } from '../helpers';
import SignStep, { SignStepType } from './SignStep';

export interface SignModalType {
  handleClose: (props?: HandleCloseType) => void;
  error: string;
}

const SignWithLedgerModal = ({ handleClose, error }: SignModalType) => {
  const transactionsToSign = useSelector(transactionsToSignSelector);
  const { sessionId, transactions, callbackRoute } = transactionsToSign!;
  const [currentStep, setCurrentStep] = React.useState(0);
  const [signedTransactions, setSignedTransactions] =
    React.useState<SignStepType['signedTransactions']>();

  return (
    <Modal
      show
      backdrop='static'
      onHide={handleClose}
      className='modal-container'
      animation={false}
      centered
    >
      <div className='card container'>
        <div className='card-body'>
          {transactions?.map((transaction, index) => (
            <SignStep
              key={transaction.getData().toString() + index}
              {...{
                index,
                transaction,
                handleClose,
                error,
                sessionId,
                callbackRoute,
                setSignedTransactions,
                signedTransactions,
                currentStep,
                setCurrentStep,
                isLast: index === transactions.length - 1
              }}
            />
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default SignWithLedgerModal;
