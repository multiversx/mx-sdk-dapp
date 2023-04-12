import React, {
  ChangeEvent,
  ClipboardEvent,
  Fragment,
  MouseEvent,
  useState
} from 'react';
import classNames from 'classnames';

const TwoFactorAuthForm = ({ onComplete, length = 9 }: any) => {
  const initial = new Map(
    Array.from({ length }).map((_, index) => [index, ''])
  );

  const [error, setError] = useState(false);
  const [touched, setTouched] = useState(false);
  const [code, setCode] = useState(initial);

  const GUARDIAN_FIELD = 'guardian';
  const long = length > 8;

  const onReset = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setCode(initial);
  };

  const checkValidity = () => {
    setError(!Array.from(code.values()).every((item) => Boolean(item)));
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
      checkValidity();
      return;
    }

    if (!long) {
      setTouched(true);
      setCode(new Map(code.set(index, value)));
      checkValidity();

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
      checkValidity();
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
      checkValidity();
      return;
    }
  };

  return (
    <form className='form-2fa'>
      <label htmlFor={GUARDIAN_FIELD}>Guardian Code</label>

      {long ? (
        <input
          value={code.get(0)}
          id={GUARDIAN_FIELD}
          name={GUARDIAN_FIELD}
          data-testid={GUARDIAN_FIELD}
          onPaste={onPaste}
          onChange={onChange}
          type='text'
        />
      ) : (
        Array.from({ length }).map((_, index) => (
          <Fragment key={`input-code-${index}`}>
            <input
              type='text'
              data-index={index}
              onChange={onChange}
              onPaste={onPaste}
              id={`${GUARDIAN_FIELD}-code-${index}`}
              name={`${GUARDIAN_FIELD}-code-${index}`}
              data-testid={`${GUARDIAN_FIELD}-code-${index}`}
              value={code.get(index)}
            />

            {/* {length > 4 && index + 1 === Math.ceil(length / 2) && <div></div>} */}
          </Fragment>
        ))
      )}

      <div onClick={onReset}>RESET</div>
    </form>
  );
};

export default TwoFactorAuthForm;
