import React from 'react';
import classNames from 'classnames';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { WithClassnameType } from '../types';
import { Dot } from './Dot';

export interface ProgressStepsType extends WithClassnameType {
  totalSteps: number;
  currentStep: number;
}

const ProgressStepsComponent = ({
  totalSteps,
  currentStep,
  className = 'dapp-progress-steps',
  globalStyles
}: ProgressStepsType & WithStylesImportType) => {
  const dots = [];

  for (let i = 1; i <= totalSteps; i += 1) {
    const isCurrentStep = currentStep === i;
    const color =
      isCurrentStep || i < currentStep
        ? globalStyles?.bgPrimary
        : globalStyles?.bgSecondary;

    dots.push(
      <Dot
        data-testid={`step${i}${isCurrentStep ? 'active' : ''}`}
        key={i}
        color={color}
        className={isCurrentStep ? 'active' : ''}
      />
    );
  }

  return (
    <div
      className={classNames(
        globalStyles?.progressSteps,
        globalStyles?.flexRow,
        globalStyles?.justifyContentCenter,
        className
      )}
    >
      <div
        className={classNames(
          globalStyles?.steps,
          globalStyles?.flexRow,
          globalStyles?.justifyContentCenter,
          globalStyles?.alignItemsCenter,
          globalStyles?.positionRelative
        )}
      >
        <hr
          className={classNames(
            globalStyles?.positionAbsolute,
            globalStyles?.w100,
            globalStyles?.m0
          )}
        />
        {dots}
      </div>
    </div>
  );
};

export const ProgressSteps = withStyles(ProgressStepsComponent, {
  ssrStyles: () => import('UI/LoadingDots/loadingDotsStyle.scss'),
  clientStyles: () => require('UI/LoadingDots/loadingDotsStyle.scss').default
});
