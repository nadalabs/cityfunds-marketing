'use client';
import { Ref } from 'react';
import styled from 'styled-components';

interface ImageStepperProps {
  activeStep: number;
  totalSteps: number;
  sliderRef: Ref<any>;
}

export default function ImageStepper({
  activeStep,
  totalSteps,
  sliderRef,
}: ImageStepperProps) {
  const handleOnClick = (index: number) => {
    // @ts-ignore-next-line
    sliderRef?.current.slickGoTo(index);
  };

  return (
    <div style={{ display: 'flex' }}>
      {Array(totalSteps)
        .fill(0)
        .map((_, jdx) => (
          <GreenSquare
            key={jdx}
            onClick={() => handleOnClick(jdx)}
            style={{
              backgroundColor: activeStep !== jdx ? '#B0B0B0' : '#48DC95',
            }}
          />
        ))}
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
