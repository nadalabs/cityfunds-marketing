import { PrimaryButton } from '@elements/Buttons';
import { SectionWrapper, StackWrapper } from '@elements/Containers';
import { Heading, PrimaryText } from '@elements/Typography';
import { EXTERNAL_ROUTES } from '@utils/constants';
import styled from 'styled-components';

export default function CareersCTA({}) {
  return (
    <SectionWrapper>
      <ContentWrapper>
        <StackWrapper>
        <Heading style={{ color: 'white' }}>
          Think you're a fit?
        </Heading>
        <PrimaryText style={{ color: 'white' }}>
          Do you want to join us and do Nada? Just kidding, we work - most of
          the time. We're a group who pride ourselves on rolling up our sleeves
          and getting the job done. Nada's just getting started, and we'll keep
          going until we make real estate investing accessible for all. Want to
          come help us?
        </PrimaryText>
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
  border-radius: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 48px 24px;
    border-radius: 40px;
  }
`;
