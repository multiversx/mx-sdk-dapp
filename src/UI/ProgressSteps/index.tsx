import React from 'react';
import globalStyles from 'assets/sass/main.scss';
import { Dot } from './Dot';
import classnames from 'classnames';

export interface ProgressStepsType {
  totalSteps: number;
  currentStep: number;
  className?: string;
}

export const ProgressSteps = ({
  totalSteps,
  currentStep,
  className
}: ProgressStepsType) => {
  const dots = [];

  for (let i = 1; i <= totalSteps; i += 1) {
    const isCurrentStep = currentStep === i;
    const color =
      isCurrentStep || i < currentStep
        ? globalStyles.bgPrimary
        : 'bg-secondary';

    dots.push(
      <Dot
        data-testid={`step${i}${isCurrentStep ? 'active' : ''}`}
        key={i}
        color={color}
      />
    );
  }

  return (
    <div
      className={classnames(
        globalStyles.progressSteps,
        globalStyles.flexRow,
        globalStyles.justifyContentCenter,
        className
      )}
    >
      <div
        className={classnames(
          globalStyles.steps,
          globalStyles.flexRow,
          globalStyles.justifyContentCenter,
          globalStyles.alignItemsCenter,
          globalStyles.positionRelative
        )}
      >
        <hr
          className={classnames(
            globalStyles.positionAbsolute,
            globalStyles.w100,
            globalStyles.m0
          )}
        />
        {dots}
      </div>
    </div>
  );
};
export default ProgressSteps;
