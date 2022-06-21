import React from 'react';
import globalStyles from 'assets/sass/main.scss';
import Dot from './Dot';

interface ProgressStepsType {
  totalSteps: number;
  currentStep: number;
  className?: string;
}

const ProgressSteps = ({
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
      className={`${globalStyles.progressSteps} ${globalStyles.flexRow} ${globalStyles.justifyContentCenter} ${className}`}
    >
      <div
        className={`${globalStyles.steps} ${globalStyles.flexRow} ${globalStyles.justifyContentCenter} ${globalStyles.alignItemsCenter} ${globalStyles.positionRelative}`}
      >
        <hr
          className={`${globalStyles.positionAbsolute} ${globalStyles.w100} ${globalStyles.m0}`}
        />
        {dots}
      </div>
    </div>
  );
};
export default ProgressSteps;
