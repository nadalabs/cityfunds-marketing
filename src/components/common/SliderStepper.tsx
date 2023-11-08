import { FlexWrapper } from '@elements/Containers';
import { PrimaryText } from '@elements/Typography';
import Image from 'next/image';
import { Ref } from 'react';
import styled from 'styled-components';

interface SliderStepperProps {
  activeStep: number;
  totalSteps: number;
  sliderRef: Ref<any>;
}

export default function SliderStepper({
  activeStep,
  totalSteps,
  sliderRef,
}: SliderStepperProps) {
  const handleOnClick = (index: number) => {
    // @ts-ignore-next-line
    sliderRef?.current.slickGoTo(index);
  };

  return (
    <FlexWrapper style={{ justifyContent: 'flex-end', gap: '0.5rem' }}>
      <PrimaryText>
        {activeStep} / {totalSteps}
      </PrimaryText>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <Image
          src="/icons/back.svg"
          alt="Back"
          onClick={() => handleOnClick(activeStep - 1)}
          height={12}
          width={12}
          style={{ cursor: 'pointer' }}
        />

        <Image
          src="/icons/next.svg"
          alt="Next"
          onClick={() => handleOnClick(activeStep + 1)}
          height={12}
          width={12}
          style={{ cursor: 'pointer' }}
        />
      </div>
    </FlexWrapper>
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
