import React from 'react';
import { useGuardianScren } from '../../hooks';

// TODO: @miro
import styles from './../../../../ledger/LedgerLoginContainer/addressRowStyles.scss';

const GUARDIAN_FIELD = 'guardian';

interface GuardianScreenPropsType {
  onBack: () => void;
  onSetCode: (code: string) => void;
}

export const GuardianScreen = ({
  onBack,
  onSetCode
}: GuardianScreenPropsType) => {
  const onSubmit = (code: string) => {
    onSetCode(code);
  };

  const {
    isValid,
    isTouched,
    error,
    // setError,
    onChange,
    onBlur,
    hadleSubmit,
    handleClose,
    value
  } = useGuardianScren({
    onSubmit,
    onCancel: onBack
  });

  return (
    <>
      <div className={styles.ledgerAddressTableBodyItem}>
        <label htmlFor={GUARDIAN_FIELD}>Guardian Code</label>

        <div>
          <input
            type='text'
            id={GUARDIAN_FIELD}
            name={GUARDIAN_FIELD}
            data-testid={GUARDIAN_FIELD}
            required={true}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            autoComplete='off'
          />
        </div>

        {!isValid && isTouched && <div>{error}</div>}
      </div>
      <button
        className={styles.ledgerConfirmAddressHeading}
        type='button'
        id='confirmCodeBtn'
        data-testid='confirmCodeBtn'
        disabled={!isValid}
        onClick={hadleSubmit}
      >
        Confirm code
      </button>

      <button
        type='button'
        id='cancelCodeBtn'
        data-testid='cancelCodeBtn'
        onClick={handleClose}
      >
        Back
      </button>
    </>
  );
};
