import CarouselStepper from '@components/CarouselStepper';
import EmailCapture from '@components/EmailCapture';
import { Heading, PrimaryText, SecondaryText } from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import { useRef } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

interface PageHeroProps {
  heading: string;
  primaryText: string;
  btnText?: string;
  onClick?: () => void;
  heroImages: { name: string; heroImage: string; totalAssets?: number }[];
  isTextWide?: boolean;
  formName?: string;
}

export default function PageHero({
  heading,
  primaryText,
  btnText,
  onClick,
  heroImages,
  isTextWide,
  formName,
}: PageHeroProps) {
  const isMobile = useIsMobile();
  const sliderRef = useRef();

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: 'linear',
    arrows: false,
  };

  return (
    <Slider {...settings} ref={sliderRef}>
      {heroImages.map(({ name, totalAssets, heroImage }, idx) => (
        <div key={idx}>
          <HeroImage
            style={{
              backgroundImage: `linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0) 22.38%,
                rgba(0, 0, 0, 0.32) 44.79%,
                rgba(0, 0, 0, 0.87) 73.73%
              ),
              url(${heroImage})`,
            }}
          />
          <ContentWrapper>
            <div>
              <Heading
                style={{
                  color: 'white',
                  maxWidth: isTextWide ? '1100px' : '700px',
                }}
              >
                {heading}
              </Heading>
              <PrimaryText
                style={{
                  color: '#B0B0B0',
                  maxWidth: isTextWide ? '900px' : '700px',
                }}
              >
                {primaryText}
              </PrimaryText>
              {btnText && (
                <div style={{ maxWidth: '700px' }}>
                  <EmailCapture
                    btnText={btnText}
                    onClick={onClick}
                    formName={formName}
                  />
                </div>
              )}
            </div>

            {!isMobile && heroImages.length > 1 && (
              <div style={{ width: '200px' }}>
                <SecondaryText style={{ color: 'white', marginBottom: 0 }}>
                  {name}
                </SecondaryText>
                <SecondaryText
                  style={{ color: '#B0B0B0', marginBottom: '8px' }}
                >
                  {totalAssets} Properties
                </SecondaryText>
                <CarouselStepper
                  activeStep={idx}
                  totalSteps={heroImages.length}
                  sliderRef={sliderRef}
                />
              </div>
            )}
          </ContentWrapper>
        </div>
      ))}
    </Slider>
  );
}

export const HeroImage = styled.div`
  width: 100vw;
  height: 110vh;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  padding: 16px 100px 10vh 100px;
  position: absolute;
  top: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    text-align: center;
    padding: 30px;
    position: absolute;
    height: inherit;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
  }
`;
