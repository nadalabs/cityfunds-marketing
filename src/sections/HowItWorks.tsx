import PhoneScreen from '@components/PhoneScreen';
import { PrimaryButton } from '@elements/Buttons';
import {
  GreenSquare,
  Heading,
  Overline,
  PrimaryText,
  Text,
} from '@elements/Typography';
import { EXTERNAL_ROUTES } from '@utils/constants';
import useIsMobile from '@hooks/useIsMobile';
import Slider from 'react-slick';
import styled from 'styled-components';

interface HowItWorksProps {
  steps: { title: string; description: string; imageUrl: string }[];
}

export default function HowItWorks({ steps }: HowItWorksProps) {
  const isMobile = useIsMobile();

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

  return (
    <SectionWrapper>
      <Slider {...settings}>
        {steps.map(({ imageUrl }, idx) => (
          <div key={idx}>
            <div
              key={idx}
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <PhoneScreen imageUrl={imageUrl} />

              <div style={{ width: '60%' }}>
                <div>
                  <Overline>Real Estate Investing Simplified</Overline>
                  <Heading>How it Works</Heading>
                </div>
                <div style={{ display: 'flex' }}>
                  {steps.map(({ title, description }, jdx) => (
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
            </div>
          </div>
        ))}
      </Slider>
    </SectionWrapper>
  );
}

export const SectionWrapper = styled.div`
  padding: 204px 156px;

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
