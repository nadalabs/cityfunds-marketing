import EmailCapture from '@components/EmailCapture';
import { SectionWrapper } from '@elements/Containers';
import { Overline, SecondaryHeading } from '@elements/Typography';
import { EXTERNAL_ROUTES } from '@utils/constants';
import styled from 'styled-components';

export default function BlogCapture() {
  return (
    <SectionWrapper>
      <ContentWrapper>
        <div style={{ width: '55%' }}>
          <Overline>Be the first to know about new Cityfunds</Overline>
          <SecondaryHeading>Sign Up for Updates</SecondaryHeading>
        </div>

        <div>
          <EmailCapture
            btnText="Subscribe"
            onClick={() => window.location.replace(EXTERNAL_ROUTES.WEB_APP)}
            formName="Newsletter Lead"
          />
        </div>
      </ContentWrapper>
    </SectionWrapper>
  );
}

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3.125rem 6.25rem;
  gap: 3.5rem;
  width: 100%;
  border-radius: 3.4375rem;
  box-shadow: 2px 4px 25px 0px rgba(0, 0, 0, 0.1);

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
  }
`;
