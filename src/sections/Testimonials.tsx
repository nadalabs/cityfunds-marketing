import {
  GreenSquare,
  Heading,
  Overline,
  PrimaryText,
} from '@elements/Typography';
import Slider from 'react-slick';
import styled from 'styled-components';

interface TestimonialsProps {
  reviews: { name: string; text: string; location: string }[];
}

export default function Testimonials({ reviews }: TestimonialsProps) {
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
      <Slider {...settings}>
        {reviews.map(({ name, text, location }, idx) => (
          <div key={idx}>
            <ContentWrapper>
              <div style={{ maxWidth: '788px', marginRight: '24px' }}>
                <Heading>"{text}"</Heading>
                <div style={{ display: 'flex' }}>
                  {reviews.map((_, jdx) => (
                    <GreenSquare
                      key={jdx}
                      style={{
                        backgroundColor: idx !== jdx && 'rgba(2, 1, 1, 0.05)',
                        marginRight: '8px',
                      }}
                    />
                  ))}
                </div>
              </div>

              <div>
                <PrimaryText
                  style={{ color: '#48DC95', fontWeight: 600, marginBottom: 0 }}
                >
                  {name}
                </PrimaryText>
                <PrimaryText style={{ color: 'black' }}>{location}</PrimaryText>
              </div>
            </ContentWrapper>
          </div>
        ))}
      </Slider>
    </SectionWrapper>
  );
}

export const SectionWrapper = styled.div`
  padding: 92px 156px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 24px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;
