import React from 'react';
import classNames from 'classnames';

import { GuardianScreenType } from 'types';
import { useGuardianScreen } from '../../hooks';

import styles from './guardianScreenStyles.scss';

export { GuardianScreenType };

/*
 * Declare here the constants for the guardian field (for single input only, not applicable for multiple boxes).
 * Control here using the "GUARDIAN_CODE_LENGTH" variable the expected code length (will adapt the interface).
 */

const GUARDIAN_FIELD = 'guardian';
const GUARDIAN_CODE_LENGTH = 8;

/*
 * Handle the component declaration, and export it.
 */

export const GuardianScreen = (props: GuardianScreenType) => {
  /*
   * Declare breakpoints and use them in various conditions.
   * "longest" - code of 9 or above characters; will transform field into single input.
   * "long" - code of 7 or 8 characters; will create a pair of three/four and four inputs.
   * "medium" - code of 6 characters; will transform field into a pair of three inputs.
   * "short" - code of below 6 characters; will generate as many inputs as characters, without pairing.
   * "half" - only applicable to more than 5 characters, will appoximate down half of the total generated inputs.
   */

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
    error,
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

  /*
   * Don't render anything if the account doesn't have a guardian.
   * Most likely not the first failcheck.
   */

  if (!signedTransactions) {
    return null;
  }

  /*
   * Retrieve the index of the given input (zero applicable if only one input for above 8 characters).
   * Should return a boolean to toggle error if it's empty or if there's a general submitting error.
   */

  const isInputError = (index: number) =>
    (!Boolean(code.get(index)) && Boolean(required)) || Boolean(error);

  /*
   * Return the rendered component.
   */

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
                  [styles.guardianInputError]: isInputError(0),
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
                  id={`${GUARDIAN_FIELD}-${index}`}
                  name={`${GUARDIAN_FIELD}-${index}`}
                  data-testid={`${GUARDIAN_FIELD}-${index}`}
                  value={code.get(index)}
                  className={classNames(
                    styles.guardianInput,
                    styles.guardianInputBox,
                    { [styles.guardianInputError]: isInputError(index) }
                  )}
                />
              </div>
            ))
          )}
        </div>

        <div
          onClick={onReset}
          className={classNames(styles.guardianReset, {
            [styles.guardianResetMedium]: medium,
            [styles.guardianResetLong]: long,
            [styles.visible]: anyCharacter,
            [styles.error]: (!allCharacters && required) || Boolean(error)
          })}
        >
          Reset
        </div>

        <div
          className={classNames(styles.guardianError, {
            [styles.visible]: (!allCharacters && required) || Boolean(error)
          })}
        >
          {Boolean(error) ? error : 'Required'}
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
