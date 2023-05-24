import Header from '@components/Header';
import { GreenSquare, Heading, PrimaryText, Text } from '@elements/Typography';
import { isMobileDevice } from '@utils/helpers';
import Slider from 'react-slick';
import EmailCapture from 'src/components/EmailCapture';
import styled from 'styled-components';

interface HeroProps {
  partnerImage?: string;
}

export default function HeroSection({partnerImage}: HeroProps) {
  const isMobile = isMobileDevice();
  const CITIES = [
    { name: 'Dallas', imageUrl: '/images/dallas-hero.png', numProperties: 10 },
    { name: 'Austin', imageUrl: '/images/austin-hero.png', numProperties: 10 },
    { name: 'Miami', imageUrl: '/images/miami-hero.png', numProperties: 10 },
    { name: 'Tampa', imageUrl: '/images/tampa-hero.png', numProperties: 10 },
  ];

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
      {CITIES.map(({ name, numProperties, imageUrl }, idx) => (
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
            <Header partnerImage={partnerImage} />
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
              }}
            >
              <ContentWrapper>
                <Heading style={{ color: 'white' }}>
                  Own a Piece of Your Favorite City
                </Heading>
                <PrimaryText style={{ color: '#B0B0B0' }}>
                  Diversified real estate portfolios with passive income in the
                  nation's top cities.
                </PrimaryText>
                <EmailCapture />
              </ContentWrapper>

              {!isMobile && (
                <div>
                  <Text style={{ color: 'white', marginBottom: 0 }}>
                    {name}
                  </Text>
                  <Text style={{ color: '#B0B0B0', marginBottom: '8px' }}>
                    {numProperties} Properties
                  </Text>
                  <div style={{ display: 'flex' }}>
                    {CITIES.map((_, jdx) => (
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
  width: 100vw;
  height: 110vh;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;
  padding: 50px 100px 15vh 100px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 50px 30px;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 726px;
`;
