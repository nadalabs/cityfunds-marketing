import {
  Caption,
  Heading,
  Overline,
  SecondaryText,
} from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import { EXTERNAL_ROUTES } from '@utils/constants';
import Image from 'next/image';
import EmailCapture from 'src/components/EmailCapture';
import styled from 'styled-components';

interface PromoCTAProps {
  overline?: string;
}

export default function PromoCTA({ overline }: PromoCTAProps) {
  const isMobile = useIsMobile();

  return (
    <SectionWrapper>
      <ContentWrapper>
        {overline && (
          <Overline style={{ marginBottom: '1rem' }}>{overline}</Overline>
        )}
        <Heading style={{ marginBottom: 0 }}>Invest in Dallas and</Heading>
        <Heading style={{ color: '#48DC95', marginBottom: '2rem' }}>
          Get Free Shares in Dallas
        </Heading>
        <SecondaryText style={{ marginBottom: '4px' }}>
          The first 50 users to invest $250 in Dallas get 2 free shares in
          Dallas.
        </SecondaryText>
        <SecondaryText style={{ marginBottom: '8px' }}>
          The first 50 users to invest $500 in Dallas get 5 free shares in
          Dallas.
        </SecondaryText>
        <Caption style={{ marginBottom: '2rem' }}>
          Promotion active until 6/30/2023 or until capacity is reached for each
          promotion. Terms and conditions apply
        </Caption>
        <EmailCapture
          btnText="Get Started"
          onClick={() => window.location.replace(EXTERNAL_ROUTES.WEB_APP)}
          formName="Cityfunds Lead"
        />
      </ContentWrapper>

      {!isMobile && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '35%',
            position: 'relative',
            left: '100px',
          }}
        >
          <Image
            width={400}
            height={400}
            alt={'Limited time offer!'}
            src={'/images/offer-background.png'}
            style={{
              borderRadius: '75px',
              zIndex: -1,
              position: 'absolute',
              top: '150px',
              left: '-80px',
            }}
          />
          <Image
            width={250}
            height={500}
            alt={'Limited time offer!'}
            src={'/images/offer.png'}
          />
        </div>
      )}
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
  max-width: 700px;
  margin-right: 84px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-right: 0;
  }
`;
