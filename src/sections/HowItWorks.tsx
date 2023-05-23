import { PrimaryButton } from '@elements/Buttons';
import {
  GreenSquare,
  Heading,
  Overline,
  PrimaryText,
  Text,
} from '@elements/Typography';
import { EXTERNAL_ROUTES } from '@utils/constants';
import { isMobileDevice } from '@utils/helpers';
import Image from 'next/image';
import Slider from 'react-slick';
import styled from 'styled-components';

export default function HowItWorks({}) {
  const isMobile = isMobileDevice();

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: 'linear',
  };

  const STEPS = [
    {
      title: 'Select a City',
      description: 'Choose from our 4 cityfunds with more coming soon',
    },
    {
      title: 'Invest Money',
      description: 'Connect your bank account and invest in homeshares',
    },
    {
      title: 'Build Wealth',
      description:
        'Grow your portfolio  while unlocking liquid equity for home owners',
    },
  ];

  return (
    <SectionWrapper>
      {!isMobile && (
        <div style={{ display: 'flex', flexDirection: 'column', width: '35%' }}>
          <div
            style={{
              height: '534px',
              minWidth: '534px',
              backgroundColor: '#48DC95',
              borderRadius: '120px',
              zIndex: -1,
            }}
          />

          <div style={{ position: 'relative', left: '100px', bottom: '770px' }}>
            <Image
              width={350}
              height={700}
              alt={'Phone Screen'}
              src={'/images/phone-screen.png'}
            />
          </div>
        </div>
      )}

      <ContentWrapper>
        <Overline>Real Estate Investing Simplified</Overline>
        <Heading>How it Works</Heading>

        <div style={{ width: '100%' }}>
          <Slider {...settings}>
            {STEPS.map((_, idx) => (
              <div key={idx}>
                <div style={{ display: 'flex' }}>
                  {STEPS.map(({ title, description }, jdx) => (
                    <div key={jdx}>
                      <GreenSquare
                        style={{
                          backgroundColor: idx !== jdx && '#979797',
                          marginBottom: '24px',
                        }}
                      />

                      <PrimaryText
                        style={{
                          color: idx === jdx && '#48DC95',
                          fontWeight: 600,
                        }}
                      >
                        {title}
                      </PrimaryText>
                      <Text>{description}</Text>
                      {idx === jdx && (
                        <PrimaryButton
                          onClick={() =>
                            window.location.replace(EXTERNAL_ROUTES.WEB_APP)
                          }
                        >
                          Get Started
                        </PrimaryButton>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </ContentWrapper>
    </SectionWrapper>
  );
}

export const SectionWrapper = styled.div`
  padding: 204px 156px;
  /* display: flex;
  align-items: center; */
  width: 100%;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 24px;
  }
`;

export const ContentWrapper = styled.div`
  margin-left: 98px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-left: 0;
  }
`;
