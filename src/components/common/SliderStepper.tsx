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
  const handleOnClick = (activeStep: number, isIncrement?: boolean) => {
    // @ts-ignore-next-line
    sliderRef?.current?.slickGoTo(
      isIncrement
        ? totalSteps / activeStep + increment
        : totalSteps / activeStep + increment
    );
    setActiveStep(isIncrement ? activeStep + 1 : activeStep - 1);
  };

  return (
    <div>
      <FlexWrapper style={{ justifyContent: 'flex-end', gap: '0.5rem' }}>
        <PrimaryText>
          {activeStep} / {Math.round(totalSteps / increment)}
        </PrimaryText>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <PrimaryButton
            onClick={() => handleOnClick(activeStep, true)}
            isInverted
          >
            <Image src="/icons/back.svg" alt="Back" height={8} width={8} />
          </PrimaryButton>

          <PrimaryButton onClick={() => handleOnClick(activeStep)} isInverted>
            <Image src="/icons/next.svg" alt="Next" height={8} width={8} />
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
