import FeaturedLogos from '@components/FeaturedLogos';
import AssetTicker from '@components/cityfunds/AssetTicker';
import NadaText from '@components/cityfunds/NadaText';
import CarouselStepper from '@components/common/CarouselStepper';
import { PrimaryButton, SecondaryButton } from '@elements/Buttons';
import { FlexWrapper, StackWrapper } from '@elements/Containers';
import { Heading, LargeText } from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import { IFundData } from '@utils/models';
import { urlForImage } from 'lib/sanity';
import { useRef } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

interface PageHeroProps {
  heading?: string;
  primaryText?: string;
  btnText?: string;
  logos?: any[];
  onClick?: () => void;
  btnTextSecondary?: string;
  onClickSecondary?: () => void;
  heroImages: { name?: string; fund_data?: IFundData; heroImage: string }[];
  bannerText?: boolean;
  maxWidth?: number;
}

export default function PageHero({
  heading,
  primaryText,
  btnText,
  logos,
  onClick,
  btnTextSecondary,
  onClickSecondary,
  heroImages,
  bannerText,
  maxWidth,
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
    <>
      <HeroWrapper>
        <Slider {...settings} ref={sliderRef}>
          {heroImages.map(({ heroImage, fund_data }, idx) => (
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
              <ContentWrapper style={{ bottom: bannerText ? '10rem' : '8rem' }}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                    width: '100%',
                    maxWidth: '100rem',
                  }}
                >
                  <div style={{ maxWidth: maxWidth }}>
                    <Heading
                      style={{
                        color: 'white',
                        fontSize: isMobile ? '2rem' : '4rem',
                      }}
                    >
                      {heading}
                    </Heading>
                    <LargeText
                      style={{
                        color: isMobile ? 'white' : '#989B9F',
                      }}
                    >
                      {primaryText}
                    </LargeText>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      flexDirection: isMobile ? 'column' : 'row',
                      alignItems: 'center',
                    }}
                  >
                    {btnText && (
                      <PrimaryButton
                        onClick={onClick}
                        style={{ marginRight: '1rem' }}
                      >
                        {btnText}
                      </PrimaryButton>
                    )}
                    {btnTextSecondary && (
                      <SecondaryButton
                        onClick={onClickSecondary}
                        style={{ color: 'white' }}
                      >
                        {btnTextSecondary}
                      </SecondaryButton>
                    )}
                  </div>

                  <FlexWrapper style={{ alignItems: 'flex-end' }}>
                    {logos && (
                      <FeaturedLogos
                        overline="Featured In"
                        logos={logos}
                        isHero
                      />
                    )}
                    {heroImages.length > 1 && !isMobile && (
                      <StackWrapper style={{ gap: '1rem' }}>
                        <StackWrapper style={{ gap: '0.5rem' }}>
                          <NadaText name={fund_data?.fund_name} />
                          <AssetTicker fund_data={fund_data} />
                        </StackWrapper>
                        <CarouselStepper
                          activeStep={idx}
                          totalSteps={heroImages?.length}
                          sliderRef={sliderRef}
                        />
                      </StackWrapper>
                    )}
                  </FlexWrapper>
                </div>
              </ContentWrapper>
            </div>
          ))}
        </Slider>
      </HeroWrapper>
      <div style={{ height: '110vh' }} />
    </>
  );
}

export const HeroWrapper = styled.div`
  position: absolute;
  left: 0;
  width: 100vw;
`;

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
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 1.5rem;
  padding: 0 6.25rem;
  z-index: 999;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    text-align: center;
    padding: 30px;
    margin: 0;
  }
`;
