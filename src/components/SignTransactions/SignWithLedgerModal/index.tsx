import React from 'react';
import { Modal } from 'react-bootstrap';
import { useSelector } from 'redux/DappProvider';
import { transactionsToSignSelector } from 'redux/selectors';
import { useParseMultiEsdtTransferData } from 'services/transactions/hooks/useParseMultiEsdtTransferData';
import { getGeneratedClasses } from 'utils';
import { HandleCloseType } from '../helpers';
import SignStep, { SignStepType } from './SignStep';

export interface SignModalType {
  handleClose: (props?: HandleCloseType) => void;
  error: string;
  className?: string;
}

const SignWithLedgerModal = ({
  handleClose,
  error,
  className = 'ledger-modal'
}: SignModalType) => {
  const transactionsToSign = useSelector(transactionsToSignSelector);
  const { sessionId, transactions, callbackRoute } = transactionsToSign!; // TODO: eslint warning
  const [currentStep, setCurrentStep] = React.useState(0);
  const [signedTransactions, setSignedTransactions] =
    React.useState<SignStepType['signedTransactions']>();
  const { getTxInfoByDataField, allTransactions } =
    useParseMultiEsdtTransferData({ transactions });

  const classes = getGeneratedClasses(className, true, {
    wrapper: 'modal-container wallet-connect',
    container: 'card container',
    cardBody: 'card-body'
  });

  return (
    <Modal
      show
      backdrop='static'
      onHide={handleClose}
      className={classes.wrapper}
      animation={false}
      centered
    >
      <div className={classes.container}>
        <div className={classes.cardBody}>
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
                  isLast: index === allTransactions.length - 1,
                  className
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
