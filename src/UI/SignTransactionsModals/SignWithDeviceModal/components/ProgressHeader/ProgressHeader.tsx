import React from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import { ProgressHeaderPropsType } from './ProgressHeader.types';

import styles from './progressHeaderStyles.scss';

export const ProgressHeader = (props: ProgressHeaderPropsType) => {
  const { steps, size = 'large', type = 'simple', collapsible = false } = props;

  const available = steps.filter((step) => !step.hidden);
  const active = available.findIndex((step) => step.active);
  const total = size === 'large' ? 650 : 450;
  const third = (33 / 100) * total;

  return (
    <div className={styles.progressSteps}>
      {available.map((step, index) => (
        <div
          key={`progress-step-${index}`}
          style={{ width: collapsible ? 'auto' : `${100 / available.length}%` }}
          className={classNames(styles.progressStep, {
            [styles.left]: type === 'detailed'
          })}
        >
          <div
            style={{ width: collapsible ? (step.active ? third : 20) : 'auto' }}
            className={classNames(styles.progressStepWrapper, {
              [styles.active]: step.active,
              [styles.detailed]: type === 'detailed',
              [styles.completed]: index < active || step.completed,
              [styles.collapsible]: collapsible
            })}
          >
            <div
              className={classNames(styles.progressStepIndex, {
                [styles.active]: step.active
              })}
            >
              {index + 1}

              {type === 'detailed' && index < active && (
                <FontAwesomeIcon
                  icon={faCheck}
                  className={styles.progressStepCheck}
                />
              )}
            </div>

            {step.title && type === 'detailed' && (
              <div
                className={classNames(styles.progressStepTitle, {
                  [styles.active]: step.active,
                  [styles.collapsible]: collapsible
                })}
              >
                <div className={styles.progressStepTitleText}>{step.title}</div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
