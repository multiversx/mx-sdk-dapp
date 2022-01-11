import React from 'react';
import { Modal } from 'react-bootstrap';
import { useSelector } from 'redux/DappProviderContext';
import { transactionsToSignSelector } from 'redux/selectors';
import { useParseMultiEsdtTransferData } from 'services/transactions/hooks/useParseMultiEsdtTransferData';
import { HandleCloseType } from '../helpers';
import SignStep, { SignStepType } from './SignStep';

export interface SignModalType {
  handleClose: (props?: HandleCloseType) => void;
  error: string;
}

const SignWithLedgerModal = ({ handleClose, error }: SignModalType) => {
  const transactionsToSign = useSelector(transactionsToSignSelector);
  const { sessionId, transactions, callbackRoute } = transactionsToSign!; // TODO: eslint warning
  const [currentStep, setCurrentStep] = React.useState(0);
  const [signedTransactions, setSignedTransactions] =
    React.useState<SignStepType['signedTransactions']>();
  const { getTxInfoByDataField, allTransactions } =
    useParseMultiEsdtTransferData({ transactions });
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
          {allTransactions?.map((tx, index) => {
            return (
              <SignStep
                key={tx.transaction.getData().toString() + index}
                {...{
                  index,
                  tx,
                  handleClose,
                  error,
                  sessionId,
                  callbackRoute,
                  setSignedTransactions,
                  signedTransactions,
                  currentStep,
                  txsDataToken: getTxInfoByDataField(
                    tx.transaction.getData().toString(),
                    tx.multiTxData
                  ),
                  setCurrentStep,
                  isLast: index === allTransactions.length - 1
                }}
              />
            );
          })}
        </div>
      </div>
    </Modal>
  );
};

export default SignWithLedgerModal;
