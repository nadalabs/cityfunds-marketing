import CarouselStepper from '@components/common/CarouselStepper';
import { PrimaryButton } from '@elements/Buttons';
import { Heading, LargeText } from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import { urlForImage } from 'lib/sanity';
import { ReactNode, useRef } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

interface PageHeroProps {
  heading?: string;
  primaryText?: string;
  btnText?: string;
  onClick?: () => void;
  heroImages: { name: string; heroImage: string }[];
  heroCTA?: ReactNode;
  isTextWide?: boolean;
  formName?: string;
  bannerText?: boolean;
}

export default function PageHero({
  heading,
  primaryText,
  btnText,
  onClick,
  heroImages,
  heroCTA,
  isTextWide,
  bannerText,
}: PageHeroProps) {
  const sliderRef = useRef();
  const isMobile = useIsMobile();

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
      {heroImages.map(({ heroImage }, idx) => (
        <div key={idx}>
          <HeroImage
            style={{
              backgroundImage: `linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0) 22.38%,
                rgba(0, 0, 0, 0.32) 44.79%,
                rgba(0, 0, 0, 0.87) 73.73%
              ),
              url(${
                heroImages.length === 1
                  ? heroImage
                  : urlForImage(heroImage).url()
              })`,
            }}
          />
          <ContentWrapper style={{ bottom: bannerText ? '11rem' : '8rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-end' }}>
              <div>
                <Heading
                  style={{
                    color: 'white',
                    maxWidth: isTextWide ? '1100px' : '700px',
                  }}
                >
                  {heading}
                </Heading>
                <LargeText
                  style={{
                    color: isMobile ? 'white' : '#989B9F',
                    maxWidth: isTextWide ? '1100px' : '700px',
                    marginBottom: '0.5rem',
                  }}
                >
                  {primaryText}
                </LargeText>

                {heroCTA && heroCTA}
                {btnText && (
                  <PrimaryButton onClick={onClick}>
                    {btnText}
                  </PrimaryButton>
                )}
              </div>
            </div>

            {heroImages.length > 1 && (
              <CarouselStepper
                activeStep={idx}
                totalSteps={heroImages.length}
                sliderRef={sliderRef}
              />
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
  background-position: center;
`;

const ContentWrapper = styled.div`
  position: absolute;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 1.5rem;
  margin-left: 100px;
  z-index: 999;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    text-align: center;
    padding: 30px;
    margin: 0;
  }
`;
