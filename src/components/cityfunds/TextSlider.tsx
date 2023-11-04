import LongFormText from '@components/common/LongFormText';
import { CardWrapper, SliderWrapper, StackWrapper } from '@elements/Containers';
import {
  Heading,
  Overline,
  PrimaryText,
  SmallHeading,
} from '@elements/Typography';
import styled from 'styled-components';

interface TextSliderProps {
  overline?: string;
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
      {overline && <Overline>{overline}</Overline>}

      <div>
        <Heading>{heading}</Heading>
        {primaryText && <PrimaryText>{primaryText}</PrimaryText>}
      </div>

      <div
        style={{
          display: 'flex',
          overflowX: 'scroll',
          position: 'relative',
          right: '1rem',
        }}
      >
        {valueProps?.map(({ title, description }, idx) => (
          <div key={idx}>
            <TextWrapper>
              <StackWrapper style={{ gap: '1rem' }}>
                <GreenSquare />
                <SmallHeading>{title}</SmallHeading>
                <LongFormText content={description} />
              </StackWrapper>
            </TextWrapper>
          </div>
        ))}
      </div>
    </SliderWrapper>
  );
}

export const GreenSquare = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 7px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 20px;
    width: 20px;
    border-radius: 3px;
  }
`;

const TextWrapper = styled(CardWrapper)`
  margin: 1rem;
  height: 24rem;
  width: 20rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 18rem;
    width: 18rem;
    padding: 2rem;
  }
`;
