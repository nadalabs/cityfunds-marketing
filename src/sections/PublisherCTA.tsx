import { Caption, Heading, SecondaryText } from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import { EXTERNAL_ROUTES } from '@utils/constants';
import EmailCapture from 'src/components/EmailCapture';
import PhoneScreen from 'src/components/PhoneScreen';
import styled from 'styled-components';

interface PublisherCTAProps {
  name?: string;
}

export default function PublisherCTA({ name }: PublisherCTAProps) {
  const isMobile = useIsMobile();

  return (
    <SectionWrapper>
      <ContentWrapper>
        <Heading style={{ marginBottom: 0 }}>Invest &</Heading>
        <Heading style={{ color: '#48DC95', marginBottom: '2rem' }}>
          Earn Free Shares
        </Heading>
        <SecondaryText style={{ marginBottom: '8px' }}>
          Invest $2500 and get 10 Free Shares plus a special edition “I Own
          Dallas” T-Shirt! Or invest $5000 and gain 50 Free Shares plus a
          Cityfunds Gift Bag!
        </SecondaryText>
        <Caption style={{ marginBottom: '2rem' }}>
          **All Free Shares are Distributed from the Dallas CityfundsFree Shares
          will be issued 60 days after funds have settled
        </Caption>
        <EmailCapture
          btnText="Get Started"
          onClick={() => window.location.replace(EXTERNAL_ROUTES.WEB_APP)}
        />
      </ContentWrapper>

      {!isMobile && <PhoneScreen imageUrl="/images/screen-1.png" />}
    </SectionWrapper>
  );
}

export const SectionWrapper = styled.div`
  padding: 76px 156px 147px 156px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 24px;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 600px;
  margin-right: 84px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-right: 0;
  }
`;
