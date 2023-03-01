import React from 'react';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

import { Field, Form, Formik } from 'formik';
import { guardianSignTransactions } from 'apiCalls';
import globalStyles from 'assets/sass/main.scss';
import { useDispatch, useSelector } from 'reduxStore/DappProviderContext';
import { signedTransactionsSelector } from 'reduxStore/selectors';
import {
  clearAllSignedTransactions,
  updateSignedTransactions
} from 'reduxStore/slices';
import { TransactionBatchStatusesEnum } from 'types';
import { ModalContainer } from '../ModalContainer';
import { PageState } from '../PageState';

//create own file
export function GuardianModal() {
  const signedTransactions = useSelector(signedTransactionsSelector);
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(clearAllSignedTransactions());
  };

  const transactionsNeedGuardianSignature = () => {
    return (
      Boolean(Object.keys(signedTransactions).length) &&
      Object.values(signedTransactions)?.some(
        (tx) =>
          tx.status === TransactionBatchStatusesEnum.needsGuardianSignature
      )
    );
  };

  const unGuardAccountHandler = async ({ authCode }: { authCode: string }) => {
    for (const sessionId in signedTransactions) {
      if (
        signedTransactions[sessionId].status ===
        TransactionBatchStatusesEnum.needsGuardianSignature
      ) {
        // const plainTransactions: IPlainTransactionObject[] | undefined =
        //   signedTransactions[sessionId].transactions?.map((tx) => {
        //     return newTransaction(tx).toPlainObject();
        //   });

        //add try catch
        const signedByGuardianTransactions = await guardianSignTransactions({
          code: authCode,
          transactions: signedTransactions[sessionId].transactions ?? []
        });

        dispatch(
          updateSignedTransactions({
            sessionId,
            status: TransactionBatchStatusesEnum.signed,
            transactions: signedByGuardianTransactions
          })
        );
      }
    }
  };

  return (
    <ModalContainer
      onClose={onClose}
      visible={transactionsNeedGuardianSignature()}
    >
      <PageState
        icon={faLock}
        iconBgClass={classNames(globalStyles.p4, globalStyles.roundedBgCircle)}
        iconSize='3x'
        title='Please provide your 2FA code'
        description="In order to authorize this transaction, you'll need to provide your 2FA code."
        action={
          <Formik
            initialValues={{
              authCode: ''
            }}
            onSubmit={unGuardAccountHandler}
          >
            <Form>
              <label htmlFor='authCode'>Google authenticator code</label>
              <Field
                id='authCode'
                name='authCode'
                placeholder='Authentication code'
              />

              <button type='submit' className='btn  btn-primary'>
                Unguard Account
              </button>
            </Form>
          </Formik>
        }
      />
    </ModalContainer>
  );
}
