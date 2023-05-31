import { CardWrapper, SliderWrapper } from '@elements/Containers';
import {
  GreenSquare,
  Heading,
  PrimaryText,
  SecondaryText,
} from '@elements/Typography';
import Slider from 'react-slick';
import { styled } from 'styled-components';

interface CardSliderProps {
  heading: string;
  primaryText: string;
  cards: { title: string; description?: string; imageUrl: string }[];
}

export default function CardSlider({
  heading,
  primaryText,
  cards,
}: CardSliderProps) {
  const settings = {
    dots: false,
    slidesToShow: 1,
    swipeToSlide: true,
    infinite: false,
    variableWidth: true,
    arrows: false,
  };

  return (
    <SliderWrapper>
      <HeadingWrapper>
        <Heading>{heading}</Heading>
        <PrimaryText>{primaryText}</PrimaryText>
      </HeadingWrapper>

      <Slider {...settings}>
        {cards.map(({ title, description, imageUrl }, idx) => (
          <div key={idx}>
            <CardWrapper
              style={{
                display: 'flex',
                alignItems: 'flex-end',
                backgroundImage: `url(${imageUrl})`,
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                  <Heading style={{ color: 'white', marginBottom: '8px' }}>
                    {title}
                  </Heading>
                  <GreenSquare
                    style={{ marginLeft: '4px', marginBottom: '18px' }}
                  />
                </div>
                {description && (
                  <SecondaryText style={{ color: 'white' }}>
                    {description}
                  </SecondaryText>
                )}
              </div>
            </CardWrapper>
          </div>
        ))}
      </Slider>
    </SliderWrapper>
  );
}

export const HeadingWrapper = styled.div`
  max-width: 1100px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`;
