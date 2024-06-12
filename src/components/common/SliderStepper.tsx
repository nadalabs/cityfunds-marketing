'use client';
import { PrimaryButton } from '@elements/Buttons';
import { FlexWrapper } from '@elements/Containers';
import { PrimaryText } from '@elements/Typography';
import Image from 'next/image';
import { Ref } from 'react';
import styled from 'styled-components';

interface SliderStepperProps {
  activeStep: number;
  setActiveStep: (step: number) => void;
  totalSteps: number;
  increment: number;
  sliderRef: Ref<any>;
}

export default function SliderStepper({
  activeStep,
  setActiveStep,
  totalSteps,
  increment,
  sliderRef,
}: SliderStepperProps) {
  const isBackDisabled = !activeStep;
  const isNextDisabled =
    Math.ceil(activeStep / increment) + 1 ===
    Math.round(totalSteps / increment);

  const handleBack = (activeStep: number) => {
    const index = activeStep - increment;
    // @ts-ignore-next-line
    sliderRef?.current?.slickGoTo(index);
    setActiveStep(index);
  };

  const handleNext = (activeStep: number) => {
    const index = activeStep + increment;
    // @ts-ignore-next-line
    sliderRef?.current?.slickGoTo(index);
    setActiveStep(index);
  };

  return (
    <div>
      <FlexWrapper style={{ justifyContent: 'flex-end', gap: '0.5rem' }}>
        <PrimaryText>
          {Math.round(activeStep / increment) + 1} /{' '}
          {Math.round(totalSteps / increment)}
        </PrimaryText>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <PrimaryButton
            onClick={() => handleBack(activeStep)}
            style={{ cursor: isBackDisabled ? 'default' : 'pointer' }}
            disabled={isBackDisabled}
            $isInverted
          >
            <Image
              src={`/icons/${isBackDisabled ? 'back-disabled' : 'back'}.svg`}
              alt="Back"
              height={8}
              width={8}
            />
          </PrimaryButton>

          <PrimaryButton
            onClick={() => handleNext(activeStep)}
            style={{ cursor: isNextDisabled ? 'default' : 'pointer' }}
            disabled={isNextDisabled}
            $isInverted
          >
            <Image
              src={`/icons/${isNextDisabled ? 'next-disabled' : 'next'}.svg`}
              alt="Next"
              height={8}
              width={8}
            />
          </PrimaryButton>
        </div>
      </FlexWrapper>
    </div>
  );
}

export const GreenSquare = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  height: 16px;
  width: 16px;
  border-radius: 4px;
  margin-right: 8px;
  cursor: pointer;
`;
