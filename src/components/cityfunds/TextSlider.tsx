import { CardWrapper, SliderWrapper, StackWrapper } from '@elements/Containers';
import {
  Heading,
  LargeText,
  Overline,
  PrimaryText,
  SmallHeading,
} from '@elements/Typography';
import styled from 'styled-components';

interface TextSliderProps {
  overline: string;
  heading: string;
  primaryText?: string;
  valueProps: any[];
}

export default function TextSlider({
  overline,
  heading,
  primaryText,
  valueProps,
}: TextSliderProps) {
  return (
    <SliderWrapper>
      <Overline>{overline}</Overline>
      <Heading>{heading}</Heading>
      {primaryText && <LargeText>{primaryText}</LargeText>}

      <div
        style={{
          display: 'flex',
          overflowX: 'scroll',
          position: 'relative',
          right: '1rem',
        }}
      >
        {valueProps.map(({ title, description }, idx) => (
          <TextWrapper key={idx}>
            <StackWrapper style={{}}>
              <GreenSquare />
              <SmallHeading>{title}</SmallHeading>
              <PrimaryText>{description}</PrimaryText>
            </StackWrapper>
          </TextWrapper>
        ))}
      </div>
    </SliderWrapper>
  );
}

export const GreenSquare = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  height: 30px;
  width: 30px;
  border-radius: 7px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 20px;
    width: 20px;
    border-radius: 3px;
    margin-bottom: 14px;
  }
`;

const TextWrapper = styled(CardWrapper)`
  box-shadow: 2px 4px 25px rgba(0, 0, 0, 0.1);
  margin: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 2rem;
  }
`;
