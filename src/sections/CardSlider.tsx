import { GreenSquare } from '@components/CarouselStepper';
import { CardWrapper, SliderWrapper } from '@elements/Containers';
import {
  Caption,
  Heading,
  PrimaryText,
  SecondaryText,
} from '@elements/Typography';
import Image from 'next/image';
import { useRef } from 'react';
import Slider from 'react-slick';
import { styled } from 'styled-components';

interface CardSliderProps {
  heading: string;
  primaryText: string;
  cards: { title: string; description?: string; imageUrl: string }[];
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
          {cards?.map(({ title, description, imageUrl }, idx) => (
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
                    <Heading
                      style={{
                        color: 'white',
                        marginBottom: '8px',
                        fontSize: isSmallText ? '42px' : '64px',
                        lineHeight: isSmallText ? '42px' : '64px',
                      }}
                    >
                      {title}
                    </Heading>
                    <GreenSquare
                      style={{ marginLeft: '4px', marginBottom: '18px' }}
                    />
                  </div>
                  {description && (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          backgroundColor: 'rgba(152, 152, 152, 0.35)',
                          borderRadius: '10px',
                          padding: '4px 8px',
                          marginRight: '8px',
                        }}
                      >
                        <SecondaryText
                          style={{
                            color: 'white',
                            fontWeight: 600,
                            margin: '0 4px 0 0',
                          }}
                        >
                          10.03%
                        </SecondaryText>
                        <Image
                          width={18}
                          height={18}
                          alt={'Arrow Up'}
                          src={'/icons/arrow.svg'}
                        />
                      </div>
                      <Caption style={{ color: 'white' }}>102 Assets</Caption>
                    </div>
                  )}
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
