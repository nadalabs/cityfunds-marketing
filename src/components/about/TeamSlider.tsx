'use client';
import { GreenSquare } from '@components/common/ImageStepper';
import SliderStepper from '@components/common/SliderStepper';
import {
  CardWrapper,
  FlexWrapper,
  SectionWrapper,
  StackWrapper,
} from '@elements/Containers';
import { BoldText, Heading, Overline } from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import { urlForImage } from 'lib/sanity';
import { useRef, useState } from 'react';
import Slider from 'react-slick';

interface TeamSliderProps {
  title: string;
  teammates: {
    name: string;
    image: string;
    role: string;
    linkedIn: string;
  }[];
}

export default function TeamSlider({ teammates, title }: TeamSliderProps) {
  const [activeStep, setActiveStep] = useState(0);
  const sliderRef = useRef(null);
  const isMobile = useIsMobile();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: isMobile ? 1.1 : 4,
    slidesToScroll: isMobile ? 1 : 4,
    swipeToSlide: true,
    beforeChange: (_, next) => setActiveStep(next),
  };

  return (
    <SectionWrapper>
      <StackWrapper>
        <FlexWrapper style={{ alignItems: 'flex-end', marginBottom: '1rem' }}>
          <StackWrapper style={{ gap: isMobile ? '0' : '0.5rem' }}>
            <Overline>Who We Are</Overline>
            <Heading style={{ marginBottom: 0 }}>{title}</Heading>
          </StackWrapper>
          <SliderStepper
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            totalSteps={isMobile ? teammates?.length : teammates?.length + 1}
            increment={isMobile ? 1 : 4}
            sliderRef={sliderRef}
          />
        </FlexWrapper>

        <Slider ref={sliderRef} {...settings}>
          {teammates
            ?.map((props) => ({
              ...props,
              image: urlForImage(props.image),
            }))
            .map(({ name, image, role, linkedIn }, idx) => (
              <div key={idx}>
                <CardWrapper
                  onClick={() => window.open(linkedIn, '_blank')}
                  style={{
                    padding: '2rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'flex-end',
                    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 39.06%, rgba(0, 0, 0, 0.22) 67.71%, rgba(0, 0, 0, 0.40) 95.83%), url(${image})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: 'inherit',
                    height: '20rem',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                      <Heading
                        style={{
                          fontSize: isMobile
                            ? '1rem'
                            : name.length > 20
                              ? '1.4rem'
                              : '1.5rem',
                          lineHeight: '2rem',
                          color: 'white',
                          marginBottom: 0,
                        }}
                      >
                        {name}
                      </Heading>
                      <GreenSquare
                        style={{
                          height: '0.5rem',
                          width: '0.5rem',
                          marginLeft: '8px',
                          borderRadius: '2px',
                          marginBottom: '0.5rem',
                        }}
                      />
                    </div>

                    <BoldText
                      style={{ fontSize: '1rem', color: 'white', margin: 0 }}
                    >
                      {role}
                    </BoldText>
                  </div>
                </CardWrapper>
              </div>
            ))}
        </Slider>
      </StackWrapper>
    </SectionWrapper>
  );
}
