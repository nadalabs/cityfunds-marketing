import { PrimaryButton } from '@elements/Buttons';
import { SectionWrapper } from '@elements/Containers';
import { Heading, PrimaryText } from '@elements/Typography';
import styled from 'styled-components';

export default function CareersCTA({}) {
  return (
    <SectionWrapper>
      <ContentWrapper>
        <Heading style={{ color: 'white', marginBottom: '48px' }}>
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
          <PrimaryButton isDarkMode>
            Check out our Open Opportunities
          </PrimaryButton>
        </div>
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
