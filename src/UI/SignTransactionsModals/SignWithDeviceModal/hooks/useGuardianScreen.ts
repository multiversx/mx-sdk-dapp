import { ChangeEvent, ClipboardEvent, MouseEvent, useState } from 'react';
import { Transaction } from '@multiversx/sdk-core/out';

export const useGuardianScreen = (props: any) => {
  const {
    signedTransactions,
    guardianProvider,
    setSignedTransactions,
    onSignTransaction,
    length
  } = props;

  const long = length > 8;
  const initial = new Map(
    Array.from({ length }).map((_, index) => [index, ''])
  );

  const [error, setError] = useState('');
  const [touched, setTouched] = useState(false);
  const [code, setCode] = useState(initial);

  const onReset = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setCode(initial);
  };

  const onSubmit = async (event: MouseEvent<HTMLElement>) => {
    const characters = Array.from(code.values());
    const valid = characters.every((character) => Boolean(character));

    if (valid) {
      event.preventDefault();

      try {
        const transactions = Object.values(signedTransactions);
        // TODO remove any
        const guardedTransactions =
          await guardianProvider.applyGuardianSignature(
            transactions as any,
            code
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
      setError('Required');
    }
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const value = long ? target.value : target.value.slice(-1);
    const index = Number(target.dataset.index);
    const sibling = target.nextElementSibling
      ? (target.nextElementSibling as HTMLElement)
      : null;

    if (long) {
      setTouched(true);
      setCode(new Map(code.set(0, value)));
      return;
    }

    if (!long) {
      setTouched(true);
      setCode(new Map(code.set(index, value)));

      if (sibling && Boolean(value)) {
        sibling.focus();
      }
    }
  };

  const onPaste = (event: ClipboardEvent<HTMLInputElement>) => {
    const target = event.target as HTMLElement;
    const index = Number(target.dataset.index);
    const value = event.clipboardData.getData('text/plain');
    const sibling = target.nextElementSibling
      ? (target.nextElementSibling as HTMLElement)
      : null;

    if (event.preventDefault) {
      event.preventDefault();
      setTouched(true);
    }

    if (long) {
      setCode(new Map(code.set(0, value)));
      return;
    }

    if (!long) {
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

  return { error, code, touched, onChange, onPaste, onReset, onSubmit };
};
