import { GreenSquare, Heading, PrimaryText, Text } from '@elements/Typography';
import { isMobileDevice } from '@utils/helpers';
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
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
              }}
            >
              <ContentWrapper>
                <Heading style={{ color: 'white' }}>{heading}</Heading>
                <PrimaryText style={{ color: '#B0B0B0' }}>
                  {primaryText}
                </PrimaryText>
                <EmailCapture />
              </ContentWrapper>

              {!isMobile && heroImages.length > 1 && (
                <div>
                  <Text style={{ color: 'white', marginBottom: 0 }}>
                    {name}
                  </Text>
                  <Text style={{ color: '#B0B0B0', marginBottom: '8px' }}>
                    {numProperties} Properties
                  </Text>
                  <div style={{ display: 'flex' }}>
                    {heroImages.map((_, jdx) => (
                      <GreenSquare
                        key={jdx}
                        style={{
                          backgroundColor: idx !== jdx && '#B0B0B0',
                          marginRight: '8px',
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </HeroImage>
        </div>
      ))}
    </Slider>
  );
}

export const HeroImage = styled.div`
  display: flex;
  width: 100vw;
  height: 110vh;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  padding: 50px 100px 15vh 100px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 50px 30px;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 726px;
`;
