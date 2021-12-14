import * as React from 'react';
import { Transaction } from '@elrondnetwork/erdjs';
import { Modal } from 'react-bootstrap';
import { HandleCloseType } from '../helpers';
import SignStep, { SignStepType } from './SignStep';

export interface SignModalType {
  show: boolean;
  handleClose: (props?: HandleCloseType) => void;
  error: string;
  sessionId: string;
  transactions: Transaction[];
  callbackRoute: string;
}

const SignWithLedgerModal = ({
  show,
  handleClose,
  error,
  sessionId,
  transactions,
  callbackRoute
}: SignModalType) => {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [signedTransactions, setSignedTransactions] =
    React.useState<SignStepType['signedTransactions']>();

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
          {transactions.map((transaction, index) => (
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
