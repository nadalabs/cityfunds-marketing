import LongFormText from '@components/common/LongFormText';
import { PrimaryButton } from '@elements/Buttons';
import { SectionWrapper, StackWrapper } from '@elements/Containers';
import { Heading } from '@elements/Typography';
import { EXTERNAL_ROUTES } from '@utils/constants';
import styled from 'styled-components';

interface CareersCTAProps {
  description: string;
}

export default function CareersCTA({ description }: CareersCTAProps) {
  return (
    <SectionWrapper>
      <ContentWrapper>
        <StackWrapper>
          <Heading style={{ color: 'white' }}>Think you're a fit?</Heading>
          <LongFormText content={description} isInverted />
          <div>
            <PrimaryButton
              style={{ color: '#48dc95', backgroundColor: 'white' }}
              onClick={() => window.open(EXTERNAL_ROUTES.CAREERS, '_blank')}
            >
              Check Out Opportunities
            </PrimaryButton>
          </div>
        </StackWrapper>
      </ContentWrapper>
    </SectionWrapper>
  );
}

const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 100px;
  background: #48dc95;
  border-radius: 2rem;
  box-shadow: 1.5px 1.5px 25px 0px rgba(0, 0, 0, 0.05);

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 48px 24px;
    border-radius: 40px;
  }
`;
