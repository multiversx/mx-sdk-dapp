import React, { MouseEvent } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Transaction } from '@multiversx/sdk-core/out';
import classNames from 'classnames';
import globalStyles from 'assets/sass/main.scss';
import { PageState } from 'UI/PageState';
import { useGuardianScren, useSignStepsClasses } from '../../hooks';
import { GuardianScreenType } from '../../signWithDeviceModal.types';
import styles from './../../../../ledger/LedgerLoginContainer/addressRowStyles.scss';
import TwoFactorAuthForm from './components/TwoFactorAuth';

const GUARDIAN_FIELD = 'guardian';

export { GuardianScreenType };

export const GuardianScreen = ({
  onSignTransaction,
  onPrev,
  guardianProvider,
  title,
  className,
  signedTransactions,
  setSignedTransactions,
  signStepInnerClasses
}: GuardianScreenType) => {
  const classes = useSignStepsClasses();

  const {
    isValid,
    isTouched,
    error,
    setError,
    onChange,
    onBlur,
    value: code
  } = useGuardianScren();

  const { buttonsWrapperClassName, buttonClassName } =
    signStepInnerClasses || {};

  const onCloseClick = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    onPrev();
  };

  if (!guardianProvider || !signedTransactions) {
    return null;
  }

  const onSubmit = async () => {
    try {
      const transactions = Object.values(signedTransactions);
      // TODO remove any
      const guardedTransactions = await guardianProvider.applyGuardianSignature(
        transactions as any,
        code
      );
      const newTransactions = guardedTransactions.reduce(
        (acc: Record<number, Transaction>, transaction: any, index: number) => {
          acc[index] = transaction;
          return acc;
        },
        {} as typeof signedTransactions
      );
      setSignedTransactions?.(newTransactions);
      onSignTransaction();
    } catch {
      setError('Error while signing with guardian');
    }
  };

  return (
    <>
      {/* <TwoFactorAuthForm /> */}
      <PageState
        icon={error ? faTimes : null}
        iconClass={classes.icon}
        iconBgClass={error ? globalStyles.bgDanger : globalStyles.bgWarning}
        iconSize='3x'
        className={className}
        title={title}
        description={
          <div className={styles.ledgerAddressTableBodyItem}>
            <label htmlFor={GUARDIAN_FIELD}>Guardian Code</label>

            <div>
              <input
                type='text'
                id={GUARDIAN_FIELD}
                name={GUARDIAN_FIELD}
                data-testid={GUARDIAN_FIELD}
                required={true}
                value={code}
                onChange={onChange}
                onBlur={onBlur}
                autoComplete='off'
              />
            </div>

            {!isValid && isTouched && <div>{error}</div>}
          </div>
        }
        action={
          <div
            className={classNames(
              classes.buttonsWrapper,
              buttonsWrapperClassName
            )}
          >
            <button
              id='closeButton'
              data-testid='closeButton'
              onClick={onCloseClick}
              className={classNames(classes.cancelButton, buttonClassName)}
            >
              Back
            </button>

            <button
              type='button'
              className={classNames(classes.signButton, buttonClassName)}
              id='submitBtn'
              data-testid='submitBtn'
              onClick={onSubmit}
            >
              Submit
            </button>
          </div>
        }
      />
    </>
  );
};
