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
import Slider from 'react-slick';
import PhoneScreen from 'src/components/PhoneScreen';
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
      {!isMobile && <PhoneScreen />}

      <ContentWrapper>
        <Overline>Real Estate Investing Simplified</Overline>
        <Heading>How it Works</Heading>

        <Slider {...settings}>
          <div>
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
          </div>
        </Slider>
      </ContentWrapper>
    </SectionWrapper>
  );
}

export const SectionWrapper = styled.div`
  padding: 204px 156px;
  display: flex;

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
