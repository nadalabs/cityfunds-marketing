import LongFormText from '@components/common/LongFormText';
import {
  CardWrapper,
  SectionWrapper,
  StackWrapper,
} from '@elements/Containers';
import { BoldText, Heading, Overline, PrimaryText } from '@elements/Typography';
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
    <SectionWrapper>
      <StackWrapper style={{ gap: '1rem' }}>
        {overline && <Overline>{overline}</Overline>}
        <Heading>{heading}</Heading>
        {primaryText && <PrimaryText>{primaryText}</PrimaryText>}
      </StackWrapper>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {valueProps?.map(({ title, description }, idx) => (
          <div key={idx}>
            <TextWrapper>
              <StackWrapper style={{ gap: '1rem' }}>
                <GreenSquare />
                <BoldText>{title}</BoldText>
                <LongFormText content={description} isSmall />
              </StackWrapper>
            </TextWrapper>
          </div>
        ))}
      </div>
    </SectionWrapper>
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
  margin: 1rem 0;
  height: 18rem;
  width: 18rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 18rem;
    width: 18rem;
    padding: 2rem;
  }
`;
