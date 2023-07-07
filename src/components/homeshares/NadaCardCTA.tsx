import { GreenSquare } from '@components/common/CarouselStepper';
import EmailCapture from '@components/common/EmailCapture';
import { SectionWrapper } from '@elements/Containers';
import {
  Heading,
  Overline,
  SecondaryHeading,
  SecondaryText,
} from '@elements/Typography';
import { EXTERNAL_ROUTES } from '@utils/constants';
import Image from 'next/image';
import styled from 'styled-components';

export default function NadaCardCTA() {
  const steps = [
    {
      title: 'Unlock Home Equity',
      description:
        'Use it to make purchases anywhere Visa is accepted. The Nada card is FDIC insured and provides bank-level security to ensure the safety of transactions. ',
    },
    {
      title: 'Get Rewarded',
      description:
        'Earn cashback on everyday purchases and receive dividends from Cityfund, which are deposited on the card. By referring friends and family, you can enjoy extra perks.',
    },
  ];

  return (
    <StyledSection>
      <ImageWrapper>
        <Image src="/images/nada-card.png" alt="Nada Card" fill />
      </ImageWrapper>
      <ContentWrapper>
        <Overline style={{ marginBottom: '1rem' }}>Coming Soon</Overline>
        <Heading style={{ fontSize: '56px', marginBottom: '3rem' }}>
          Build Real Estate Wealth on the Nada Card
        </Heading>

        <TextWrapper>
          {steps.map(({ title, description }, jdx) => (
            <StepWrapper key={jdx}>
              <GreenSquare style={{ marginBottom: '24px' }} />
              <SecondaryHeading style={{ color: '#48DC95', fontSize: '32px' }}>
                {title}
              </SecondaryHeading>
              <SecondaryText style={{ fontSize: '16px' }}>
                {description}
              </SecondaryText>
            </StepWrapper>
          ))}
        </TextWrapper>

        <EmailCapture
          btnText="Join Waitlist"
          onClick={() => window.location.replace(EXTERNAL_ROUTES.TYPEFORM)}
          formName="Nada Card Lead"
        />
      </ContentWrapper>
    </StyledSection>
  );
}

const StyledSection = styled(SectionWrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    flex-direction: column;
  }
`;

const ContentWrapper = styled.div`
  width: 1100px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`;

const StepWrapper = styled.div`
  margin-bottom: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-bottom: 2rem;
  }
`;

const TextWrapper = styled.div`
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 600px;
  height: 400px;
  margin-right: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`;
