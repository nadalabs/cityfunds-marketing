import { Heading, SecondaryText } from '@elements/Typography';
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
        <Heading>
        Own a Piece of Your Favorite City
        </Heading>
        <SecondaryText style={{ marginBottom: '8px' }}>
          Unlock diversified real estate portfolios with passive income in the
          nation's top cities.
        </SecondaryText>
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
