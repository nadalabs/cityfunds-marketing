import { GreenSquare, Heading, PrimaryText, Text } from '@elements/Typography';
import Slider from 'react-slick';
import styled from 'styled-components';

export default function CardSlider({}) {
  const settings = {
    dots: false,
    slidesToShow: 2.5,
    swipeToSlide: true,
    infinite: false,
  };

  const CITIES = [
    { name: 'Dallas', imageUrl: '/images/dallas.png', numProperties: 102 },
    { name: 'Austin', imageUrl: '/images/austin.png', numProperties: 102 },
    { name: 'Miami', imageUrl: '/images/miami.png', numProperties: 102 },
    { name: 'Tampa', imageUrl: '/images/tampa.png', numProperties: 102 },
    {
      name: 'Coming Soon',
      imageUrl: '/images/coming-soon-1.png',
      numProperties: 0,
    },
    {
      name: 'Coming Soon',
      imageUrl: '/images/coming-soon-2.png',
      numProperties: 0,
    },
  ];

  return (
    <SectionWrapper>
      <Heading style={{ maxWidth: '1100px' }}>
        Pick your favorite Cityfund, or invest in all of them
      </Heading>
      <PrimaryText style={{ maxWidth: '1130px' }}>
        Cityfunds is the only investment platform that provides direct access to
        diversified portfolios of owner-occupied homes in the nation’s top
        cities.
      </PrimaryText>

      <Slider {...settings}>
        {CITIES.map(({ name, imageUrl, numProperties }, idx) => (
          <div key={idx}>
            <CardWrapper style={{ backgroundImage: `url(${imageUrl})` }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                  <Heading style={{ color: 'white' }}>{name}</Heading>
                  <GreenSquare
                    style={{ marginLeft: '4px', marginBottom: '18px' }}
                  />
                </div>
                {numProperties && (
                  <Text style={{ color: 'white' }}>
                    {numProperties} Properties
                  </Text>
                )}
              </div>
            </CardWrapper>
          </div>
        ))}
      </Slider>
    </SectionWrapper>
  );
}

export const SectionWrapper = styled.div`
  padding: 140px 0 0 156px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 0 0 24px;
  }
`;

export const CardWrapper = styled.div`
  background-size: cover;
  width: 450px;
  height: 450px;
  padding: 40px;
  display: flex;
  align-items: flex-end;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-width: 195px;
    height: 195px;
    padding: 16px;
    margin-right: 12px;
  }
`;
