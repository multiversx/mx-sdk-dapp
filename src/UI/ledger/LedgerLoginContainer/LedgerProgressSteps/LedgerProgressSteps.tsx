import React from 'react';
import classNames from 'classnames';

import styles from './progressStepsStyles.scss';

export interface LedgerProgressStepsPropsType {
  total: number;
  active: number;
  ledgerProgressStepsClassNames?: {
    ledgerProgressStepsWrapperClassName?: string;
    ledgerProgressStepsItemClassName?: string;
    ledgerProgressStepsItemWrapperClassName?: string;
  };
}

export const LedgerProgressSteps = (props: LedgerProgressStepsPropsType) => {
  const { active, total, ledgerProgressStepsClassNames } = props;
  const {
    ledgerProgressStepsWrapperClassName,
    ledgerProgressStepsItemClassName,
    ledgerProgressStepsItemWrapperClassName
  } = ledgerProgressStepsClassNames || {};

  return (
    <div
      className={classNames(
        styles.ledgerProgressSteps,
        ledgerProgressStepsWrapperClassName
      )}
    >
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className={classNames(
            styles.ledgerProgressStepWrapper,
            {
              [styles.ledgerProgressStepActive]: index + 1 <= active,
              [styles.ledgerProgressStepExtended]: active > index + 1
            },
            ledgerProgressStepsItemWrapperClassName
          )}
        >
          <div
            className={classNames(
              styles.ledgerProgressStep,
              { [styles.ledgerProgressStepActive]: index + 1 <= active },
              ledgerProgressStepsItemClassName
            )}
          >
            {index + 1}
          </div>
        </div>
      ))}
    </div>
  );
};
