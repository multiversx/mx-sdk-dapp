import {
  ChangeEvent,
  ClipboardEvent,
  MouseEvent,
  useMemo,
  useState
} from 'react';
import { Transaction } from '@multiversx/sdk-core/out';

import type { GuardianScreenType } from '../signWithDeviceModal.types';

/*
 * Handle the hook properties types interface declaration.
 */

export interface GuardianScreenHookType {
  signedTransactions: GuardianScreenType['signedTransactions'];
  onSignTransaction: GuardianScreenType['onSignTransaction'];
  guardianProvider: GuardianScreenType['guardianProvider'];
  setSignedTransactions: GuardianScreenType['setSignedTransactions'];
  length: number;
}

/*
 * Handle the hook declaration.
 */

export const useGuardianScreen = (props: GuardianScreenHookType) => {
  const {
    signedTransactions,
    guardianProvider,
    setSignedTransactions,
    onSignTransaction,
    length
  } = props;

  const longest = length > 8;
  const initial = new Map(
    Array.from({ length: longest ? 1 : length }).map((_, index) => [index, ''])
  );

  const [error, setError] = useState('');
  const [required, setRequired] = useState(false);
  const [code, setCode] = useState(initial);

  /*
   * Return a boolean of whether there's a character filled in every rendered input.
   */

  const allCharacters = useMemo(() => {
    const characters = Array.from(code.values());
    const valid = characters.every((character) => Boolean(character));

    return valid;
  }, [code]);

  /*
   * Return a boolean of whether there's a any filled in any of the total inputs.
   */

  const anyCharacter = useMemo(() => {
    const characters = Array.from(code.values());
    const valid = characters.some((character) => Boolean(character));

    return valid;
  }, [code]);

  /*
   * Callback toggled when pressing the "Reset" button.
   * Should reset the code, turn off the "required" state, and reset the possible error.
   */

  const onReset = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setCode(initial);
    setRequired(false);
    setError('');
  };

  /*
   * Get all input values, join into single string, then validate, and throw errors (if the case), or submit successfully.
   */

  const onSubmit = async (event: MouseEvent<HTMLElement>) => {
    const value = Array.from(code.values()).join('');

    if (!guardianProvider || !signedTransactions) {
      return;
    }

    if (allCharacters) {
      event.preventDefault();

      try {
        const transactions = Object.values(signedTransactions);
        // TODO remove any
        const guardedTransactions =
          await guardianProvider.applyGuardianSignature(
            transactions as any,
            value
          );

        const newTransactions = guardedTransactions.reduce(
          (
            acc: Record<number, Transaction>,
            transaction: any,
            index: number
          ) => {
            acc[index] = transaction;
            return acc;
          },
          {} as typeof signedTransactions
        );
        setSignedTransactions?.(newTransactions);
        onSignTransaction();
      } catch {
        setError('Guardian signing error');
      }
    } else {
      event.preventDefault();
      setRequired(true);
    }
  };

  /*
   * Traverse the document tree from the current target as a source, and find the next input, and return it.
   */

  const getSiblingInput = (target: EventTarget & HTMLInputElement) => {
    const parent = target.parentElement;
    const sibling = parent ? (parent.nextElementSibling as HTMLElement) : null;
    const input = sibling ? (sibling.firstChild as HTMLElement) : null;

    return input;
  };

  /*
   * Callback toggled when inputting any value in any field.
   * Should reset the error (if any), retrieve the current index through the dataset key, then set it to the Map in it's specific index.
   * For the multiple input fields, get the sibling (next) input element, and focus for more input.
   */

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const value = longest ? target.value : target.value.slice(-1);
    const index = Number(target.dataset.index);
    const sibling = getSiblingInput(target);

    event.preventDefault();
    setError('');

    if (longest) {
      setCode(new Map(code.set(0, value)));
      return;
    }

    if (!longest) {
      setCode(new Map(code.set(index, value)));

      if (sibling && Boolean(value)) {
        sibling.focus();
      }
    }
  };

  /*
   * Callback toggled when pasting into any of the input fields, working similar to the "onChange" callback.
   * Has a mechanism to populate all further inputs, starting from the target, whichever that may be.
   */

  const onPaste = (event: ClipboardEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const index = Number(target.dataset.index);
    const value = event.clipboardData.getData('text/plain');
    const sibling = getSiblingInput(target);

    if (event.preventDefault) {
      event.preventDefault();
    }

    if (longest) {
      setCode(new Map(code.set(0, value)));
      return;
    }

    if (!longest) {
      const values = value.split('');
      const characters = values.reduce(
        (total, character, slot) => total.set(slot + index, character),
        code
      );

      if (sibling) {
        sibling.focus();
      }

      setCode(new Map(characters));
      return;
    }
  };

  /*
   * Return all callbacks, states and additional input checks.
   */

  return {
    error,
    code,
    required,
    onChange,
    onPaste,
    onReset,
    onSubmit,
    allCharacters,
    anyCharacter
  };
};
