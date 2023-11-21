import AccredCard from '@components/cityfunds/AccredCard';
import SliderStepper from '@components/common/SliderStepper';
import { SectionWrapper, StackWrapper } from '@elements/Containers';
import { Heading, LargeText } from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import { ICityfund } from '@utils/models';
import { useRef, useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

interface AccredSliderProps {
  cityfunds: ICityfund[];
  isHome?: boolean;
}

export default function AccredSlider({ cityfunds, isHome }: AccredSliderProps) {
  const [activeStep, setActiveStep] = useState(0);
  const isMobile = useIsMobile();
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3.25,
    slidesToScroll: isMobile ? 1 : 3,
    swipeToSlide: true,
    beforeChange: (_, next) => setActiveStep(next),
  };

  const ALL_CARDS = cityfunds
    .map(({ fund_data, fund_content }) => ({
      fund_data,
      fund_content,
      images: [fund_content?.image_gallery[0], fund_content?.card_back],
    }))
    .sort((a, b) =>
      a.fund_data?.share_price < b.fund_data?.share_price ? 1 : -1
    );

  return (
    <SectionWrapper>
      <StackWrapper style={{ marginBottom: '1.5rem' }}>
        <StackWrapper style={{ gap: isMobile ? '0' : '0.5rem' }}>
          <Heading>Explore Offerings</Heading>
          <LargeText>
            Pick your favorite fund, or invest in all of them.
          </LargeText>
        </StackWrapper>

        <div>
          <SliderStepper
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            totalSteps={cityfunds?.length + 1}
            increment={isMobile ? 1 : 3}
            sliderRef={sliderRef}
          />
        </div>
      </StackWrapper>

      <Slider ref={sliderRef} {...settings}>
        {ALL_CARDS?.map((card, idx) => (
          <>
            {isMobile ? (
              <FadeWrapper key={idx}>
                <AccredCard {...card} image={card?.images[0]} isHome={isHome} />
              </FadeWrapper>
            ) : (
              <FadeWrapper key={idx}>
                <TopWrapper>
                  <AccredCard
                    {...card}
                    image={card?.images[0]}
                    isHome={isHome}
                  />
                </TopWrapper>
                <BottomWrapper>
                  <AccredCard
                    {...card}
                    image={card?.images[1]}
                    isHome={isHome}
                  />
                </BottomWrapper>
              </FadeWrapper>
            )}
          </>
        ))}
      </Slider>
    </SectionWrapper>
  );
}

const FadeWrapper = styled.div`
  width: 22rem;
  height: 36rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    height: 30rem;
  }
`;

const ScrollWrapper = styled.div`
  position: relative;
  bottom: 0.5rem;
  right: 1rem;
  padding: 0.5rem 4rem 1rem 1rem;
  display: flex;
  gap: 1.5rem;
  overflow-x: scroll;
  mask-image: linear-gradient(
    to right,
    transparent,
    white 1rem,
    white 90%,
    transparent
  );
`;

const ScrollFade = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 3.125rem;
  background: linear-gradient(to left, #ffffff, transparent);
`;

const TopWrapper = styled.div`
  opacity: 1;
  -webkit-transition: opacity 0.5s ease-in-out;
  -moz-transition: opacity 0.5s ease-in-out;
  -o-transition: opacity 0.5s ease-in-out;
  -ms-transition: opacity 0.5s ease-in-out;
  transition: opacity 0.5s ease-in-out;

  &:hover {
    opacity: 0;
  }
`;

const BottomWrapper = styled.div`
  position: relative;
  bottom: 36rem;
  z-index: -1;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    bottom: 30rem;
  }
`;

export const HeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`;
