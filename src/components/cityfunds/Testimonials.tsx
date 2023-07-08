import CarouselStepper from '@components/common/CarouselStepper';
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
    autoplaySpeed: 4000,
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
                <QuoteText>"{review}"</QuoteText>
                <CarouselStepper
                  activeStep={idx}
                  totalSteps={reviews.length}
                  sliderRef={sliderRef}
                />
              </div>

              <TextWrapper>
                <PrimaryText
                  style={{ color: '#48DC95', fontWeight: 600, marginBottom: 0 }}
                >
                  {name}
                </PrimaryText>
                <PrimaryText style={{ color: 'black' }}>{city}</PrimaryText>
              </TextWrapper>
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

const QuoteText = styled(Heading)`
  height: 420px;
  font-size: 3rem;
  line-height: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 400px;
    font-size: 32px;
    line-height: 40px;
  }
`;

const TextWrapper = styled.div`
  margin: 0 0 0 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin: 1rem 0 0 0;
  }
`;
