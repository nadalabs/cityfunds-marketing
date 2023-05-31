import {
  GreenSquare,
  Heading,
  PrimaryText,
  SecondaryText,
} from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import Slider from 'react-slick';
import EmailCapture from 'src/components/EmailCapture';
import styled from 'styled-components';

interface PageHeroProps {
  heading: string;
  primaryText: string;
  heroImages: { name: string; imageUrl: string; numProperties?: number }[];
}

export default function PageHero({
  heading,
  primaryText,
  heroImages,
}: PageHeroProps) {
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
    arrows: false,
  };

  return (
    <Slider {...settings}>
      {heroImages.map(({ name, numProperties, imageUrl }, idx) => (
        <div key={idx}>
          <HeroImage
            style={{
              backgroundImage: `linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0) 22.38%,
                rgba(0, 0, 0, 0.32) 44.79%,
                rgba(0, 0, 0, 0.87) 73.73%
              ),
              url(${imageUrl})`,
            }}
          />
          <ContentWrapper>
            <div>
              <Heading style={{ color: 'white', maxWidth: '600px' }}>
                {heading}
              </Heading>
              <PrimaryText style={{ color: '#B0B0B0', maxWidth: '600px' }}>
                {primaryText}
              </PrimaryText>
              <EmailCapture />
            </div>

            {!isMobile && heroImages.length > 1 && (
              <div>
                <SecondaryText style={{ color: 'white', marginBottom: 0 }}>
                  {name}
                </SecondaryText>
                <SecondaryText
                  style={{ color: '#B0B0B0', marginBottom: '8px' }}
                >
                  {numProperties} Properties
                </SecondaryText>
                <div style={{ display: 'flex' }}>
                  {heroImages.map((_, jdx) => (
                    <GreenSquare
                      key={jdx}
                      style={{
                        backgroundColor: idx !== jdx ? '#B0B0B0' : '#48DC95',
                        marginRight: '8px',
                      }}
                    />
                  ))}
                </div>
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
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  padding: 16px 48px 10vh 48px;
  position: absolute;
  top: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    text-align: center;
    padding: 30px;
    padding-bottom: 15vh;
  }
`;
