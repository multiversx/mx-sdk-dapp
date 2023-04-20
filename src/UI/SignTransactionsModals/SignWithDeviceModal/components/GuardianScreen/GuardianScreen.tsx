import React from 'react';

import classNames from 'classnames';

import { GuardianScreenType } from 'types';
import { useGuardianScreen } from '../../hooks';

import styles from './guardianScreenStyles.scss';

export { GuardianScreenType };

const GUARDIAN_FIELD = 'guardian';
const GUARDIAN_CODE_LENGTH = 8;

export const GuardianScreen = (props: GuardianScreenType) => {
  const longest = GUARDIAN_CODE_LENGTH > 8;
  const long = GUARDIAN_CODE_LENGTH >= 7 && GUARDIAN_CODE_LENGTH <= 8;
  const medium = Number(GUARDIAN_CODE_LENGTH) === 6;
  const short = GUARDIAN_CODE_LENGTH < 6;
  const half = short ? null : Math.floor(GUARDIAN_CODE_LENGTH / 2);

  const {
    onSignTransaction,
    onPrev,
    signedTransactions,
    setSignedTransactions
  } = props;

  const {
    code,
    // error,
    required,
    onChange,
    onPaste,
    onReset,
    onSubmit,
    allCharacters,
    anyCharacter
  } = useGuardianScreen({
    onSignTransaction,
    signedTransactions,
    setSignedTransactions,
    length: GUARDIAN_CODE_LENGTH
  });

  if (!signedTransactions) {
    return null;
  }

  return (
    <form className={styles.guardian}>
      <div
        className={classNames(styles.guardianField, {
          [styles.guardianFieldLongest]: longest
        })}
      >
        <label htmlFor={GUARDIAN_FIELD} className={styles.guardianLabel}>
          Guardian Code
        </label>

        <div className={styles.guardianFields}>
          {longest ? (
            <div
              className={classNames(styles.guardianInputWrapper, {
                [styles.guardianInputWrapperLongest]: longest
              })}
            >
              <input
                value={code.get(0)}
                id={GUARDIAN_FIELD}
                name={GUARDIAN_FIELD}
                data-testid={GUARDIAN_FIELD}
                onPaste={onPaste}
                onChange={onChange}
                type='text'
                autoComplete='off'
                className={classNames(styles.guardianInput, {
                  [styles.guardianInputError]:
                    !Boolean(code.get(0)) && Boolean(required),
                  [styles.guardianInputLongest]: longest
                })}
              />
            </div>
          ) : (
            Array.from({ length: GUARDIAN_CODE_LENGTH }).map((_, index) => (
              <div
                key={`input-code-${index}`}
                className={classNames(
                  styles.guardianInputWrapper,
                  styles[`guardianInputWrapper${index}`],
                  { [styles.guardianInputSeparator]: half === index + 1 },
                  { [styles.guardianInputWrapperLong]: long },
                  { [styles.guardianInputWrapperMedium]: medium }
                )}
              >
                <input
                  type='text'
                  data-index={index}
                  onChange={onChange}
                  autoComplete='off'
                  onPaste={onPaste}
                  id={`${GUARDIAN_FIELD}-code-${index}`}
                  name={`${GUARDIAN_FIELD}-code-${index}`}
                  data-testid={`${GUARDIAN_FIELD}-code-${index}`}
                  value={code.get(index)}
                  className={classNames(
                    styles.guardianInput,
                    styles.guardianInputBox,
                    {
                      [styles.guardianInputError]:
                        !Boolean(code.get(index)) && Boolean(required)
                    }
                  )}
                />
              </div>
            ))
          )}
        </div>

        <div
          onClick={onReset}
          className={classNames(styles.guardianReset, {
            [styles.visible]: anyCharacter
          })}
        >
          Reset
        </div>

        <div
          className={classNames(styles.guardianError, {
            [styles.guardianErrorMedium]: medium,
            [styles.guardianErrorLong]: long,
            [styles.visible]: !allCharacters && required
          })}
        >
          Required
        </div>
      </div>

      <div className={styles.guardianButtons}>
        <button onClick={onSubmit} className={styles.guardianSubmit}>
          Submit
        </button>

        <button onClick={onPrev} className={styles.guardianBack}>
          Back
        </button>
      </div>
    </form>
  );
};
