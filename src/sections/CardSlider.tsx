import { GreenSquare } from '@components/CarouselStepper';
import { CardWrapper, SliderWrapper } from '@elements/Containers';
import { Heading, PrimaryText } from '@elements/Typography';
import { EXTERNAL_ROUTES } from '@utils/constants';
import Link from 'next/link';
import { ReactNode, useRef } from 'react';
import Slider from 'react-slick';
import { styled } from 'styled-components';

interface CardSliderProps {
  heading: string;
  primaryText: string;
  cards: {
    name: string;
    cardImage: string;
    link?: string;
    description?: ReactNode;
    isSmallText?: boolean;
  }[];
}

export default function CardSlider({
  heading,
  primaryText,
  cards,
}: CardSliderProps) {
  const sliderRef = useRef();
  let scrollPosition = 0;

  const settings = {
    dots: false,
    slidesToShow: 1,
    swipeToSlide: true,
    infinite: false,
    variableWidth: true,
    arrows: false,
  };

  const handleWheel = (e) => {
    // const direction = e.deltaX < 0 ? -1 : 1;
    // scrollPosition += direction;
    // scrollPosition = Math.max(Math.min(scrollPosition, cards.length - 1), 0);
    // if (sliderRef.current) {
    //   // @ts-ignore-next-line
    //   sliderRef?.current.slickGoTo(direction * 3);
    // }
  };

  return (
    <SliderWrapper>
      <HeadingWrapper>
        <Heading>{heading}</Heading>
        <PrimaryText>{primaryText}</PrimaryText>
      </HeadingWrapper>

      <div onWheel={handleWheel} style={{ width: '100%' }}>
        <Slider {...settings} ref={sliderRef}>
          {cards?.map(
            ({ name, description, link, cardImage, isSmallText }, idx) => (
              <div key={idx}>
                <Link
                  href={link ? link : EXTERNAL_ROUTES.WEB_APP}
                  target={link ? '_blank' : '_self'}
                >
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
                            marginBottom: '0px',
                            fontSize: isSmallText ? '32px' : '64px',
                            lineHeight: isSmallText ? '32px' : '64px',
                          }}
                        >
                          {name}
                        </Heading>
                        <GreenSquare
                          style={{
                            marginLeft: isSmallText ? '4px' : '8px',
                            marginBottom: isSmallText ? '4px' : '8px',
                          }}
                        />
                      </div>
                      {description && description}
                    </div>
                  </CardWrapper>
                </Link>
              </div>
            )
          )}
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
