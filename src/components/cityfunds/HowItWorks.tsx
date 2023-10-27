import { GreenSquare } from '@components/common/CarouselStepper';
import LongFormText from '@components/common/LongFormText';
import { PrimaryButton } from '@elements/Buttons';
import { SectionWrapper } from '@elements/Containers';
import { Heading, Overline, SmallHeading } from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import { urlForImage } from 'lib/sanity';
import Image from 'next/image';
import { useRef } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

interface HowItWorksProps {
  overline: string;
  tutorials: { title: string; description: string; image: string }[];
  btnText: string;
  onClick: () => void;
  isPhoneFrame?: boolean;
}

export default function HowItWorks({
  overline,
  tutorials,
  btnText,
  onClick,
  isPhoneFrame,
}: HowItWorksProps) {
  const isMobile = useIsMobile();
  const sliderRef = useRef();

  const handleOnClick = (index) => {
    // @ts-ignore-next-line
    sliderRef?.current.slickGoTo(index);
  };

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
      <Slider {...settings} ref={sliderRef}>
        {tutorials?.map(({ image }, idx) => (
          <div key={idx}>
            <FlewWrapper>
              {!isMobile && isPhoneFrame && (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '35%',
                    position: 'relative',
                    left: '100px',
                  }}
                >
                  <div
                    style={{
                      height: '400px',
                      minWidth: '400px',
                      backgroundColor: '#48DC95',
                      borderRadius: '120px',
                      zIndex: -1,
                      position: 'absolute',
                      top: '150px',
                      left: '-70px',
                    }}
                  />

                  <Image
                    width={300}
                    height={500}
                    alt={'Phone Screen'}
                    src={urlForImage(image).url()}
                  />
                </div>
              )}

              <ContentWrapper
                style={{ marginLeft: isPhoneFrame && !isMobile ? '4rem' : 0 }}
              >
                <HeaderWrapper>
                  <Overline>{overline}</Overline>
                  <Heading>How it Works</Heading>
                </HeaderWrapper>
                <TextWrapper>
                  {tutorials?.map(({ title, description }, jdx) => (
                    <StepWrapper
                      key={jdx}
                      onClick={() => handleOnClick(jdx)}
                      style={{ cursor: 'pointer', zIndex: 9 }}
                    >
                      <GreenSquare
                        style={{
                          backgroundColor: idx !== jdx && '#979797',
                          marginBottom: '24px',
                        }}
                      />
                      <SmallHeading style={{ color: idx === jdx && '#48DC95' }}>
                        {title}
                      </SmallHeading>
                      <LongFormText content={description} />
                      {idx === jdx && (
                        <PrimaryButton
                          onClick={onClick}
                          style={{ marginTop: '2rem', zIndex: 999 }}
                        >
                          {btnText}
                        </PrimaryButton>
                      )}
                    </StepWrapper>
                  ))}
                </TextWrapper>
              </ContentWrapper>

              {!isMobile && !isPhoneFrame && (
                <Image
                  width={500}
                  height={500}
                  alt={'Phone Screen'}
                  src={urlForImage(image).url()}
                />
              )}
            </FlewWrapper>
          </div>
        ))}
      </Slider>
    </SectionWrapper>
  );
}

export const ContentWrapper = styled.div`
  width: 60%;
  height: 550px;
  position: relative;
  top: 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    margin-left: 0;
    height: 600px;
  }
`;

export const FlewWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const StepWrapper = styled.div`
  width: 33%;
  margin-right: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-bottom: 2rem;
    width: 100%;
  }
`;

export const TextWrapper = styled.div`
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 60px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-bottom: 0;
  }
`;
