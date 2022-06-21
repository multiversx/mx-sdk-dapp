import React from 'react';
import { Dot } from './Dot';

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
      isCurrentStep || i < currentStep ? 'bg-primary' : 'bg-secondary';

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
      className={`progress-steps d-flex justify-content-center ${className}`}
    >
      <div className='steps d-flex justify-content-center align-items-center position-relative'>
        <hr className='position-absolute w-100 m-0' />
        {dots}
      </div>
    </div>
  );
};
