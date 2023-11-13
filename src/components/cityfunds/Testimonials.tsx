import ImageStepper from '@components/common/ImageStepper';
import LongFormText from '@components/common/LongFormText';
import { SectionWrapper, StackWrapper } from '@elements/Containers';
import { Overline, PrimaryText } from '@elements/Typography';
import { useRef } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

interface TestimonialsProps {
  testimonials: { name: string; review: string; city: string }[];
  isBackground?: boolean;
}

export default function Testimonials({
  testimonials,
  isBackground,
}: TestimonialsProps) {
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
    <SectionWrapper isBackground={isBackground}>
      <StackWrapper style={{ gap: '1rem' }}>
        <Overline>Hear it from our users...</Overline>
        <Slider {...settings} ref={sliderRef}>
          {testimonials?.map(({ name, review, city }, idx) => (
            <div key={idx}>
              <ContentWrapper>
                <div style={{ maxWidth: '788px', marginRight: '24px' }}>
                  <LongFormText content={review} />
                  <ImageStepper
                    activeStep={idx}
                    totalSteps={testimonials?.length}
                    sliderRef={sliderRef}
                  />
                </div>

                <TextWrapper>
                  <PrimaryText
                    style={{
                      color: '#48DC95',
                      fontWeight: 600,
                      marginBottom: 0,
                    }}
                  >
                    {name}
                  </PrimaryText>
                  <PrimaryText style={{ color: 'black' }}>{city}</PrimaryText>
                </TextWrapper>
              </ContentWrapper>
            </div>
          ))}
        </Slider>
      </StackWrapper>
    </SectionWrapper>
  );
}

const ContentWrapper = styled.div`
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

const TextWrapper = styled.div`
  margin: 0 0 0 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin: 1rem 0 0 0;
  }
`;
