import {
  ChangeEvent,
  ClipboardEvent,
  MouseEvent,
  useMemo,
  useState
} from 'react';
import { Transaction } from '@multiversx/sdk-core/out';
import { GuardianScreenType } from 'types/transactions.types';

export interface GuardianScreenHookType {
  signedTransactions: GuardianScreenType['signedTransactions'];
  onSignTransaction: GuardianScreenType['onSignTransaction'];
  setSignedTransactions: GuardianScreenType['setSignedTransactions'];
  length: number;
}

export const useGuardianScreen = (props: GuardianScreenHookType) => {
  const {
    signedTransactions,
    setSignedTransactions,
    onSignTransaction,
    length = 6
  } = props;

  // TODO build in wallet
  const guardianProvider: any = {};

  const longest = length > 8;
  const initial = new Map(
    Array.from({ length: longest ? 1 : length }).map((_, index) => [index, ''])
  );

  const [error, setError] = useState('');
  const [required, setRequired] = useState(false);
  const [code, setCode] = useState(initial);

  const allCharacters = useMemo(() => {
    const characters = Array.from(code.values());
    const valid = characters.every((character) => Boolean(character));

    return valid;
  }, [code]);

  const anyCharacter = useMemo(() => {
    const characters = Array.from(code.values());
    const valid = characters.some((character) => Boolean(character));

    return valid;
  }, [code]);

  const onReset = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setCode(initial);
    setRequired(false);
  };

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
        setError('Error while signing with guardian');
      }
    } else {
      event.preventDefault();
      setRequired(true);
    }
  };

  const getSiblingInput = (target: EventTarget & HTMLInputElement) => {
    const parent = target.parentElement;
    const sibling = parent ? (parent.nextElementSibling as HTMLElement) : null;
    const input = sibling ? (sibling.firstChild as HTMLElement) : null;

    return input;
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const value = longest ? target.value : target.value.slice(-1);
    const index = Number(target.dataset.index);
    const sibling = getSiblingInput(target);

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
