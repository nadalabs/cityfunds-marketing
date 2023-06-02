import CarouselStepper from '@components/CarouselStepper';
import { SectionWrapper } from '@elements/Containers';
import { Heading, Overline, PrimaryText } from '@elements/Typography';
import { useRef } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

interface TestimonialsProps {
  reviews: { name: string; review: string; city: string }[];
}

export default function Testimonials({ reviews }: TestimonialsProps) {
  const sliderRef = useRef();
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
      <Overline>Hear it from our users...</Overline>
      <Slider {...settings} ref={sliderRef}>
        {reviews?.map(({ name, review, city }, idx) => (
          <div key={idx}>
            <ContentWrapper>
              <div style={{ maxWidth: '788px', marginRight: '24px' }}>
                <Heading>"{review}"</Heading>
                <CarouselStepper
                  activeStep={idx}
                  totalSteps={reviews.length}
                  sliderRef={sliderRef}
                />
              </div>

              <div>
                <PrimaryText
                  style={{ color: '#48DC95', fontWeight: 600, marginBottom: 0 }}
                >
                  {name}
                </PrimaryText>
                <PrimaryText style={{ color: 'black' }}>{city}</PrimaryText>
              </div>
            </ContentWrapper>
          </div>
        ))}
      </Slider>
    </SectionWrapper>
  );
}

const ContentWrapper = styled.div`
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;
