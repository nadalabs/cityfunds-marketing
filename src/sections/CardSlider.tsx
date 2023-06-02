import { GreenSquare } from '@components/CarouselStepper';
import { CardWrapper, SliderWrapper } from '@elements/Containers';
import { Heading, PrimaryText } from '@elements/Typography';
import { ReactNode, useRef } from 'react';
import Slider from 'react-slick';
import { styled } from 'styled-components';

interface CardSliderProps {
  heading: string;
  primaryText: string;
  cards: { name: string; cardImage: string; description?: ReactNode }[];
  isSmallText?: boolean;
}

export default function CardSlider({
  heading,
  primaryText,
  cards,
  isSmallText,
}: CardSliderProps) {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    slidesToShow: 1,
    swipeToSlide: true,
    infinite: false,
    variableWidth: true,
    arrows: false,
  };

  const handleWheel = (e) => {
    e.preventDefault();
    console.log(e.deltaX);
    e.deltaX < 0
      ? // @ts-ignore-next-line
        sliderRef?.current.slickNext()
      : // @ts-ignore-next-line
        sliderRef?.current.slickPrev();
  };

  return (
    <SliderWrapper>
      <HeadingWrapper>
        <Heading>{heading}</Heading>
        <PrimaryText>{primaryText}</PrimaryText>
      </HeadingWrapper>

      <div onScroll={(e) => handleWheel(e)}>
        <Slider {...settings}>
          {cards?.map(({ name, description, cardImage }, idx) => (
            <div key={idx}>
              <CardWrapper
                style={{
                  display: 'flex',
                  alignItems: 'flex-end',
                  backgroundImage: `url(${cardImage})`,
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                    <Heading
                      style={{
                        color: 'white',
                        marginBottom: '8px',
                        fontSize: isSmallText ? '42px' : '64px',
                        lineHeight: isSmallText ? '42px' : '64px',
                      }}
                    >
                      {name}
                    </Heading>
                    <GreenSquare
                      style={{ marginLeft: '4px', marginBottom: '18px' }}
                    />
                  </div>
                  {description && description}
                </div>
              </CardWrapper>
            </div>
          ))}
        </Slider>
      </div>
    </SliderWrapper>
  );
}

export const HeadingWrapper = styled.div`
  max-width: 1100px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`;
